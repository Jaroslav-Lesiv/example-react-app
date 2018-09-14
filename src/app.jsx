import React, { Component } from "react";
// import CssBaseline from "@material-ui/core/CssBaseline";
import { Wrapper } from "./ui";
import RootRouter from "./router/root";
import Main from "./main";
import { observer } from "mobx-react";
import { user } from "./store";
import { withRouter } from 'react-router'
import './ui/global'
@withRouter
@observer
class App extends Component {
  render() {
    window.user = user;
    return (
      <Wrapper>
          {/* <CssBaseline /> */}
          {/* <HeaderRouter /> */}
          <Main>
            <RootRouter isLogin={user.state.isLogin} />
          </Main>
      </Wrapper>
    );
  }
}

export default App;
