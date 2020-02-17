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
import Footer from "./components/layout/Footer";

const BOX = 0;
const SPARK = 1;

const theme = createMuiTheme({
  palette: {
    // type: 'light',
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
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
