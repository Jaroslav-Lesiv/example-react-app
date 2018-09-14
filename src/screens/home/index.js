import React, { Component } from "react";
import { PageSection } from '../../ui'
import cosmoreact from '../../assets/images/cosmoreact.png'
export default class HomeScreen extends Component {
  state = {};
  render() {
    return (
      <PageSection bg={cosmoreact}>
        Home
      </PageSection>
    );
  }
}
