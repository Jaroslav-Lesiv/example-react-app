import LoginScreen from "./screens/login";
import HomeScreen from "./screens/login";
import DocsScreen from "./screens/login";
import { withRouter } from "react-router";
import { Switch, Route } from "react-router";
import  React from 'react'
class AuthRouter extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={LoginScreen} />
      </Switch>
    );
  }
}

class UserRouter extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/docs" component={DocsScreen} />
      </Switch>
    );
  }
}

const RootRouter = ({ isLogin }) => (isLogin ? <UserRouter /> : <AuthRouter />);

export { RootRouter };
