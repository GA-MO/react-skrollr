import React from 'react'
import PropTypes from 'prop-types'

export default class Parallax extends React.Component {
  static contextTypes = { refresh: PropTypes.func }

  componentDidMount() {
    if (typeof this.context.refresh === 'function') this.context.refresh()
  }

  componentWillReceiveProps() {
    if (typeof this.context.refresh === 'function') this.context.refresh()
  }

  render() {
    const { data, children } = this.props
    return <div {...data}>{children}</div>
  }
}
