import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import Subway from "./container/Subway";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Grid>
        <Subway />
      </Grid>
    );
  }
}

export default App;
