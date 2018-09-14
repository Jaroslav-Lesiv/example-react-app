import React, { Component } from "react";
import { PageSection, SectionContent } from '../../ui'
import cosmoreact from '../../assets/images/cosmoreact.png'
import ControlledExpansionPanels from './list'
export default class HomeScreen extends Component {
  state = {};
  render() {
    return (
      <PageSection>
        <SectionContent>
          <ControlledExpansionPanels />
        </SectionContent>
      </PageSection>
    );
  }
}
