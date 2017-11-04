import React from 'react'
import PropTypes from 'prop-types'
import skrollr from 'skrollr'

export default class Parellax extends React.Component {
  static propTypes = {
    init: PropTypes.object,
    getScrollTop: PropTypes.func
  }

  static defaultProps = {
    init: {},
    getScrollTop: () => null
  }

  componentWillMount() {
    this.skrollr = skrollr.init(this.props.init)
  }

  getScrollTop = () => {
    this.props.getScrollTop(this.skrollr.getScrollTop())
  }

  componentDidMount() {
    window.addEventListener('scroll', this.getScrollTop)
  }

  componentWillUnMount() {
    window.removeEventListener('scroll', this.getScrollTop)
    this.skrollr.destroy()
  }

  static childContextTypes = {
    refresh: PropTypes.func
  }

  getChildContext() {
    return { refresh: this.skrollr.refresh }
  }

  render() {
    const { children } = this.props
    return <div>{children}</div>
  }
}
