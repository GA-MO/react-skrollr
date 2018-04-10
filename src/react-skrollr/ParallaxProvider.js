import React from 'react'
import PropTypes from 'prop-types'
import skrollr from 'skrollr'

export default class ParallaxProvider extends React.Component {
  static propTypes = {
    init: PropTypes.object,
    disableOnMobile: PropTypes.bool
  }

  static defaultProps = {
    init: {},
    disableOnMobile: true
  }

  initSkrollr() {
    this.skrollr = skrollr.init(this.props.init)
  }

  refresh = () => {
    if (this.skrollr) this.skrollr.refresh()
  }

  isMobile = () => {
    return /Android|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent || navigator.vendor || window.opera
    )
  }

  shouldInitOrDestroy = () => {
    const { disableOnMobile } = this.props
    if (!disableOnMobile) {
      this.initSkrollr()
      return
    }

    if (disableOnMobile && this.isMobile() && this.skrollr !== undefined) {
      this.skrollr.destroy()
      this.skrollr = undefined
    }

    if (disableOnMobile && !this.isMobile() && this.skrollr === undefined) {
      this.initSkrollr()
    }
  }

  componentDidMount() {
    this.shouldInitOrDestroy()
    window.addEventListener('resize', this.shouldInitOrDestroy)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.shouldInitOrDestroy)
    if (this.skrollr) this.skrollr.destroy()
  }

  static childContextTypes = {
    refresh: PropTypes.func
  }

  getChildContext() {
    return { refresh: this.refresh }
  }

  render() {
    const { children } = this.props
    return <div id='skrollr-body'>{children}</div>
  }
}
