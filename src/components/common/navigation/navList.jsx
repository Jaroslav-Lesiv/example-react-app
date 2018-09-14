import React, { Component } from 'react'
import { NavList as NavListUI, NavListItem, NavLink} from '../../../ui'
import { Home, Dock, Help } from '@material-ui/icons'
export default class NavList extends Component {
  render() {
    return (
      <NavListUI>
          <NavListItem><NavLink to={`/`}><Home /></NavLink></NavListItem>
          <NavListItem><NavLink to={`/docs`}><Dock /></NavLink></NavListItem>
          <NavListItem><NavLink to={`/author`}><Help /></NavLink></NavListItem>
      </NavListUI>
    )
  }
}
