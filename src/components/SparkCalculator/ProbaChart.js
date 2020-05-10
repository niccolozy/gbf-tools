import React, { useState } from "react";
import {
  Card, CardHeader, Divider, TextField, Grid, Typography, Container
} from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from '@material-ui/core/InputAdornment';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
  } from 'recharts';

import {checkProbaFormat, checkRollFormat, geoDistCDF, geoDistCDFReversed, binomialDist} from "./utils"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  },
  input: {
    width: "100%",
    padding: theme.spacing(1)
  },
  text: {
    width: "100%",
    padding: theme.spacing(1)
  },
  failtext: {
    width: "100%",
    padding: theme.spacing(1),
    color: "red"
  },
  chart: {
    width: "100%",
    height: "100%"
  }
}));

export default function ProbaChart({ props }) {
  const classes = useStyles();
  const [targetProba, setTargetProba] = useState("");
  const [targetRoll, setTargetRoll] = useState("");
  const [isWrongProba, setIsWrongProba] = useState(true);
  const [isWrongRoll, setIsWrongRoll] = useState(true);

  const onInputChange = (e, formatChecker, valueSetter, warningSetter) => {
    if (formatChecker(e.target.value)) {
      warningSetter(false);
    } else {
      warningSetter(true);
    }
    valueSetter(e.target.value);
  }

  let successProbability = null;
  let successEstimation = null;
  let failProbability = null;
  let cdfArray = [];
  let currentRoll = 0;
  let rollStep = 10;
  let binomialArray = [];

  if (!isWrongProba) {
    if (!isWrongRoll) {
      failProbability = (1 - Number(targetProba) / 100) ** targetRoll;
      successProbability = 1 - failProbability;
      successEstimation = Number(targetProba) / 100 * targetRoll;
      if (Number(targetProba) > 0){
        for (let i = 0; i <= 2 * successEstimation || binomialDist(i, Number(targetProba) / 100, targetRoll) > 0.01; i++){
          let p = binomialDist(i, Number(targetProba) / 100, targetRoll);
          binomialArray.push({出货次数: i+"次", 出货x次概率: p});
        }
      }
    }

    if (Number(targetProba) > 0) {
      let maxRoll = geoDistCDFReversed(Number(targetProba) / 100, 0.99);
      if (rollStep < maxRoll / 100)
        rollStep = Math.floor(maxRoll / 10000)*100;
      while(cdfArray.length === 0 || cdfArray[cdfArray.length - 1].累进出货概率 < 0.99) {
        cdfArray.push({抽卡次数: currentRoll+"抽", 累进出货概率: geoDistCDF(Number(targetProba) / 100, currentRoll), 平均出货期望: Number(targetProba) / 100 * currentRoll});
        currentRoll += rollStep;
      }
    }
  }

  return (
    <Card>
      <CardHeader
        title="出货概率计算"
        titleTypographyProps={{ variant: "h6" }}
      />

      <Divider />

      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Alert severity="info">
            计算卡池概率为p的SSR在抽卡n次时的出货可能性。同时基于几何分布和二项分布给出：<br/>
            1.抽卡x次前能出货的累计概率 <br/>
            2.目标抽卡次数下出货k次的概率分布 <br/>
            (也能用来计算Raid掉率，比如概率设为2.5%相当于计算自发超巴出金率)
          </Alert>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            name="p"
            className={classes.input}
            label="目标概率"
            variant="outlined"
            value={targetProba}
            InputProps={{
              endAdornment: <InputAdornment position="end"><b>%</b></InputAdornment>,
            }}
            error={isWrongProba}
            onChange={e => {onInputChange(e, checkProbaFormat, setTargetProba, setIsWrongProba)}}
          />
        </Grid>
        
        <Grid item xs={12} sm={3}>
          <TextField
            name="p"
            className={classes.input}
            label="目标抽卡次数"
            variant="outlined"
            value={targetRoll}
            error={isWrongRoll}
            onChange={e => {onInputChange(e, checkRollFormat, setTargetRoll, setIsWrongRoll)}}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <Typography variant="body1" className={classes.text}>
            { (isWrongProba || isWrongRoll) ? "输入数据有误，请输入正确的概率和抽卡次数" :
                                              "出货至少一次概率：" + Math.floor(successProbability * 10000) / 100 + 
                                              "%, 出货次数期望: " + successEstimation.toFixed(2)}
          </Typography>
        </Grid>

        {!isWrongProba && !isWrongRoll && (
          <Grid item xs={12}>
            <Typography variant="body1" className={classes.text} display="inline">
              你有
            </Typography>
            <Typography variant="body1" className={classes.failtext} display="inline">
              {(failProbability * 100).toFixed(4)}%
            </Typography>
            <Typography variant="body1" className={classes.text} display="inline">
              的概率等于把宝晶石扔水里！！！
            </Typography>
          </Grid>
        )}
        </Grid>
        <Card>
          <CardHeader
            title="概率分布曲线"
            titleTypographyProps={{ variant: "h6" }}
          />
          <Grid container>
          {!isWrongProba && (
              <Grid item xs={12} sm={6}>
                <Container maxWidth="sm">
                  <ResponsiveContainer width='100%' aspect={4/3.0}>
                    <LineChart
                      data={cdfArray}
                      margin={{
                          top: 5, right: 30, left: 20, bottom: 5,
                      }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="抽卡次数" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" yAxisId="left" dataKey="累进出货概率" stroke="#8884d8" activeDot={{ r: 4 }} />
                    <Line type="monotone" yAxisId="right" dataKey="平均出货期望" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                </Container>
              </Grid>
          )}
          {!isWrongProba && !isWrongRoll && (
            <Grid item xs={12} sm={6}>
              <Container maxWidth="sm">
                <ResponsiveContainer width='100%' aspect={4/3.0}>
                  <LineChart
                    data={binomialArray}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                  >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="出货次数" />
                  <YAxis yAxisId="left" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" yAxisId="left" dataKey="出货x次概率" stroke="#8884d8" activeDot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </Container>
            </Grid>
            )}
          </Grid>
      </Card>
    </Card>
  ); 
}