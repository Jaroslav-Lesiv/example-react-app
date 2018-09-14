import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Nav, LogoImage, size } from '../../../ui'
import NavList from './navList'
export default class Navigation extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <Nav>
        <LogoImage style={{ marginBottom: size.header }} />
        <NavList />
      </Nav>
    )
  }
}
