import React, { useState } from "react";
import { Grid, CssBaseline } from "@material-ui/core";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import Header from "./components/layout/Header";
import BoxCalculator from "./components/BoxCalculator";
import SparkCalculator from "./components/SparkCalculator";

const BOX = 0;
const SPARK = 1;

const theme = createMuiTheme();

function App(props) {
  const [currentTool, setCurrentTool] = useState(0);

  const onToolSelected = (e, index) => {
    setCurrentTool(index);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container>
          <Grid item xs={12}>
            <Header
              tools={props.tools}
              currentTool={props.tools[currentTool]}
              onItemClicked={onToolSelected}
            />
          </Grid>
          <Grid item xs={12}>
            {(currentTool === BOX && <BoxCalculator />) ||
              (currentTool === SPARK && <SparkCalculator />)}
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default App;
