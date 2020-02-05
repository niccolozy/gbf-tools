import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Header from "./components/layout/Header";
import BoxCalculator from "./components/BoxCalculator";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      tools: props.tools,
      currentTool: props.tools[0]
    };
  }

  onToolSelected = (e, index) => {
    this.setState({ currentTool: this.state.tools[index] });
  };

  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Header
            tools={this.state.tools}
            currentTool={this.state.currentTool}
            onItemClicked={this.onToolSelected}
          />
        </Grid>
        <Grid item xs={12}>
          <BoxCalculator />
        </Grid>
      </Grid>
    );
  }
}

export default App;
