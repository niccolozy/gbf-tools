import React, { useState, useEffect } from "react";
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

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    background: {
      light: "#f0f0f0"
    }
  }
});

const darkTheme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

function App(props) {
  const [currentTool, setCurrentTool] = useState(-1);
  const [currentTheme, setcurrentTheme] = useState("light");

  useEffect(() => {
    let storedTheme = JSON.parse(localStorage.getItem("currentTheme"));
    if (storedTheme !== null) {
      setcurrentTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("currentTheme", JSON.stringify(currentTheme));
  }, [currentTheme]);

  const onToolSelected = (e, index) => {
    setCurrentTool(index);
  };

  const onThemeToggled = (e, isLight) => {
    if (isLight) setcurrentTheme("dark");
    else setcurrentTheme("light");
  };

  return (
    <>
      <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
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
              currentTheme={currentTheme}
              onItemClicked={onToolSelected}
              onThemeToggled={onThemeToggled}
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
