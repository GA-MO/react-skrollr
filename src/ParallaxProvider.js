import React from 'react'
import PropTypes from 'prop-types'
// import skrollr from 'skrollr'
const skrollr = typeof window !== 'undefined' ? require('skrollr') : undefined;

export default class Parallax extends React.Component {
  static propTypes = {
    init: PropTypes.object,
    getScrollTop: PropTypes.func,
    children: PropTypes.node.isRequired,
  }

  static defaultProps = {
    init: {},
    getScrollTop: () => null,
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

  componentWillUnmount() {
    window.removeEventListener('scroll', this.getScrollTop)
    this.skrollr.destroy()
  }

  static childContextTypes = {
    refresh: PropTypes.func
  }

  getChildContext() {
    return { refresh: typeof window !== 'undefined' ? this.skrollr.refresh : undefined }
  }

  render() {
    const { children } = this.props
    return <div>{children}</div>
  }
}
