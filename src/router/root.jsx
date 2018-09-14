import LoginScreen from "../screens/login";
import HomeScreen from "../screens/home";
import DocsScreen from "../screens/docs";
import { withRouter } from "react-router";
import { Switch, Route } from "react-router";
import  React from 'react'

@withRouter
class AuthRouter extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={LoginScreen} />
        <Route path="/docs" component={DocsScreen} />

      </Switch>
    );
  }
}

@withRouter
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

export default RootRouter;
