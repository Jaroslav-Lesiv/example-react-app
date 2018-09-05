import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Wrapper } from "./ui";
import { RootRouter } from "./router";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <CssBaseline />
        <RootRouter />
      </Wrapper>
    );
  }
}

export default App;
