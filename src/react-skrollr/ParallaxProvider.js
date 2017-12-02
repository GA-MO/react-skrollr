import React from 'react'
import PropTypes from 'prop-types'
import skrollr from 'skrollr'

export default class ParallaxProvider extends React.Component {
  static propTypes = {
    init: PropTypes.object,
    getScrollTop: PropTypes.func
  }

  static defaultProps = {
    init: {},
    getScrollTop: () => null
  }

  state = {
    refresh: () => null
  }

  initSkrollr() {
    this.skrollr = skrollr.init(this.props.init)
    this.setState({
      refresh: this.skrollr.refresh
    })
  }

  getScrollTop = () => {
    this.props.getScrollTop(this.skrollr.getScrollTop())
  }

  componentDidMount() {
    this.initSkrollr()
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
    return { refresh: this.state.refresh }
  }

  render() {
    const { children } = this.props
    return <div>{children}</div>
  }
}
