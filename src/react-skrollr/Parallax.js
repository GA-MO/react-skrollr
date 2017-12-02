import React from 'react'
import PropTypes from 'prop-types'

export default class Parallax extends React.Component {
  static contextTypes = { refresh: PropTypes.func }

  componentDidMount() {
    this.context.refresh()
  }

  componentWillReceiveProps() {
    this.context.refresh()
  }

  render() {
    const { data, children } = this.props
    return <div {...data}>{children}</div>
  }
}
