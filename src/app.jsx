import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Wrapper, Screen, theme } from "./ui";
import { RootRouter } from "./router/index";
import { MuiThemeProvider } from "@material-ui/core/styles";
class App extends Component {
  render() {
    return (
      <Wrapper>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {/* <HeaderRouter /> */}
          <RootRouter />
        </MuiThemeProvider>
      </Wrapper>
    );
  }
}

export default App;
