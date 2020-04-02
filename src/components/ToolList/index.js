import React, { useState, useEffect } from "react";
import { Typography, Grid, Button, Divider } from "@material-ui/core";
import { Paper, Card, CardHeader, CardContent } from "@material-ui/core";
import { List, ListItem, ListItemText } from "@material-ui/core";
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
              <b>2020-04-03</b> 根据四月号更新战货箱改动{" "}
            </Typography>
            <List dense={true}>
              <ListItem>1-44箱 不变</ListItem>
              <ListItem>
                第45箱 6000战货 ---- <b>存疑</b>
              </ListItem>
              <ListItem>45-80箱 10000战货</ListItem>
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
