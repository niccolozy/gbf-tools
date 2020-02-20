import React, { useState } from "react";
import { Grid, CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Header from "./components/layout/Header";
import ToolList from "./components/ToolList";
import BoxCalculator from "./components/BoxCalculator";
import HonorCalculator from "./components/HonorCalculator";
import SparkCalculator from "./components/SparkCalculator";
import ArcarumCalculator from "./components/ArcarumCalculator";
import Footer from "./components/layout/Footer";

const INDEX = -1;
const BOX = 0;
const Honor = 1;
const SPARK = 2;
const ARCARUM = 3;

const theme = createMuiTheme({
  palette: {
    type: "light",
    // primary: {
    //   main: '#00AAE1',
    //   dark: '#143C8C',
    //   contrastText: '#fff',
    // },
    // secondary: {
    //   main: '#64B42D',
    //   dark: '#008732',
    //   contrastText: '#fff',
    // },
    // error: {
    //   main: '#BD0043',
    //   contrastText: '#fff',
    // },
    // divider: '#D7D6D5',
    background: {
      light: "#f0f0f0"
    }
  }
});

function App(props) {
  const [currentTool, setCurrentTool] = useState(-1);

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
              currentTool={
                currentTool === INDEX
                  ? "GBF小工具合集"
                  : props.tools[currentTool]
              }
              onItemClicked={onToolSelected}
            />
          </Grid>
          <Grid item xs={12}>
            {(currentTool === INDEX && (
              <ToolList tools={props.tools} onClick={onToolSelected} />
            )) ||
              (currentTool === BOX && <BoxCalculator />) ||
              (currentTool === Honor && <HonorCalculator />) ||
              (currentTool === SPARK && <SparkCalculator />) ||
              (currentTool === ARCARUM && <ArcarumCalculator />)}
          </Grid>
        </Grid>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
