import React, { Component } from "react";
import Form from "./login_form";
import { LoginWrapper, LoginForm } from '../../ui'
export default class LoginScreen extends Component {
  state = {};
  render() {
    return (
      <LoginWrapper>
        <Form />
      </LoginWrapper>
    );
  }
}
