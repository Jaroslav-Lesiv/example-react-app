import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Paper } from '../../ui'

export default class LoginForm extends Component {
  static propTypes = {
    prop: PropTypes
  }

  state = {
      firstname: '',
      lastname: ''
  }

  handleChange = name => event => {
      const { value } = event.target
      this.setState({ [name]: value })
  }

  submit = event => {
      event.preventDefault()
      console.log(this.state)
    }

  render() {
      const { firstname, lastname } = this.props
    return (
      <form onSubmit={this.submit}>
          <Paper>
              <input value={firstname} onChange={this.handleChange('firstname')} />
              <input value={lastname} onChange={this.handleChange('lastname')} />
              <button>Submit</button>
          </Paper>
      </form>
    )
  }
}
