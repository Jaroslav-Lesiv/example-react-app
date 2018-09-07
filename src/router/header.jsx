import { withRouter } from "react-router";
import { Switch, Route } from "react-router";
import  React from 'react'

class HeaderAuthRouter extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={<div>login</div>} />
      </Switch>
    );
  }
}

class HeaderUserRouter extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={<div>home</div>} />
      </Switch>
    );
  }
}

const HeaderRouter = ({ isLogin }) => (isLogin ? <HeaderUserRouter /> : <HeaderAuthRouter />);
export {
    HeaderRouter
}
