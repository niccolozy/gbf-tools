import React from "react";
import { Typography, Grid, Button, Divider } from "@material-ui/core";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {},
  button: {
    margin: theme.spacing(1)
  }
}));

export default function ToolList({ tools, onClick }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      {tools.map((tool, index) => {
        return (
          <Grid item xs={12} key={index} className={classes.button}>
            <Button
              variant="outlined"
              color="default"
              fullWidth={true}
              onClick={e => {
                onClick(e, index);
              }}
            >
              <Typography variant="h6" align="center">
                {tool}
              </Typography>
            </Button>
          </Grid>
        );
      })}
      <Grid item xs={12}>
        <Card>
          <CardHeader title="更新" />
          <Divider />
          <CardContent>
          <Typography variant="body1">
              <b>2020-05-09</b> 攒井进度页面添加出货概率计算{" "}
            </Typography>
            <List dense={true}>
              <ListItem>让冰冷的概率统计帮你攒井.jpg</ListItem>
            </List>
            <Divider />

            <Typography variant="body1">
              <b>2020-04-18</b> 修正Hell150贡献{" "}
            </Typography>
            <List dense={true}>
              <ListItem>Hell150单刷总贡献上调：3600000 -> 4100000</ListItem>
            </List>
            <Divider />

            <Typography variant="body1">
              <b>2020-04-12</b> 添加强制更新和夜间模式按钮{" "}
            </Typography>
            <List dense={true}>
              <ListItem>
                由于浏览器cache，打开网页时可能不会加载最新更新，使用前建议强制刷新一次
              </ListItem>
            </List>
            <Divider />

            <Typography variant="body1">
              <b>2020-04-09</b> 更新游戏内公告改动{" "}
            </Typography>
            <List dense={true}>
              <ListItem>战货第44箱 2000战货</ListItem>
              <ListItem>HELL150 奖励战货上调</ListItem>
            </List>
            <Divider />

            <Typography variant="body1">
              <b>2020-04-03</b> 根据四月号更新战货箱改动{" "}
            </Typography>
            <List dense={true}>
              <ListItem>1-44箱 不变</ListItem>
              <ListItem>
                第45箱 6000战货 ---- <b>存疑</b>
              </ListItem>
              <ListItem>46-80箱 10000战货</ListItem>
              <ListItem>81箱及以上 15000战货</ListItem>
            </List>
            <Divider />

            <Typography variant="body1">
              <b>2020-03-02</b> 转世进度统计测试版上线
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
