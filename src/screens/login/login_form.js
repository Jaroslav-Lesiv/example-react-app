import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Paper,
  LoginForm,
  LoginFormBlockWrapper,
  LoginFormBlock,
  Input
} from "../../ui";
import { Button } from "@material-ui/core";
import { Consumer } from "../../app";
export default class Form extends Component {
  static propTypes = {
    prop: PropTypes
  };

  state = {
    firstname: "",
    lastname: ""
  };

  handleChange = name => event => {
    const { value } = event.target;
    this.setState({ [name]: value });
  };

  submit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const { firstname, lastname } = this.props;
    return (
      <Consumer>
        <LoginForm onSubmit={this.submit}>
          <LoginFormBlockWrapper>
            <LoginFormBlock />
            <LoginFormBlock>
              <Input
                value={firstname}
                onChange={this.handleChange("firstname")}
              />
              <Input
                value={lastname}
                onChange={this.handleChange("lastname")}
              />
              <Button type={"submit"} color={"white"}>
                Submit
              </Button>
            </LoginFormBlock>
          </LoginFormBlockWrapper>
        </LoginForm>
      </Consumer>
    );
  }
}
