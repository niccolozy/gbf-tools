import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Header from "./components/layout/Header";
import BoxCalculator from "./components/BoxCalculator";
import SparkCalculator from "./components/SparkCalculator";

const BOX = 0;
const SPARK = 1;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      tools: props.tools,
      currentTool: 0
    };
  }

  onToolSelected = (e, index) => {
    this.setState({ currentTool: index });
  };

  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Header
            tools={this.state.tools}
            currentTool={this.state.tools[this.state.currentTool]}
            onItemClicked={this.onToolSelected}
          />
        </Grid>
        <Grid item xs={12}>
          {(this.state.currentTool === BOX && <BoxCalculator />) ||
            (this.state.currentTool === SPARK && <SparkCalculator />)}
        </Grid>
      </Grid>
    );
  }
}

export default App;
