import React, { Component } from 'react'
import Navigation from './components/common/navigation'
import { PageWrapper } from './ui'
export default class Main extends Component {
  render() {
      const { children } = this.props
    return (
        <React.Fragment>
            <Navigation />
            <PageWrapper>
                { children }
            </PageWrapper>
        </React.Fragment>
    )
  }
}
