import React, { Component } from "react";
import Form from "./login_form";
import { PageSection } from '../../ui'

import loginBg from '../../assets/images/login-bg.jpg'
export default class LoginScreen extends Component {
  state = {};
  render() {
    return (
      <PageSection bg={loginBg}>
        <Form />
      </PageSection>
    );
  }
}
