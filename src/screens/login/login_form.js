import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Paper,
  LoginForm,
  LoginFormBlockWrapper,
  LoginFormBlock,
  Input,
  Button,
  H2,
  H4,
  Paragraph
} from "../../ui";
// import { Button } from "@material-ui/core";
import { user } from "../../store";
import { observer } from "mobx-react";

@observer
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
    user.setUser(this.state);
  };

  render() {
    const { firstname, lastname } = this.state;
    return (
      <LoginForm onSubmit={this.submit}>
        <LoginFormBlockWrapper>
          <LoginFormBlock>
            <H2>Hi my name is Jaroslav</H2>
            <H4>And i am full stack developer</H4>
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe,
              ab in eius tempore iure nobis.
            </Paragraph>
          </LoginFormBlock>
          <LoginFormBlock align={"flex-end"}>
            <Input
              value={firstname}
              placeholder={`firstname`}
              onChange={this.handleChange("firstname")}
            />
            <Input value={lastname} placeholder={`lastname`} onChange={this.handleChange("lastname")} />
            <Button>Submit</Button>
          </LoginFormBlock>
        </LoginFormBlockWrapper>
      </LoginForm>
    );
  }
}
