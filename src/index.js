import React, { Component } from 'react'
import { classNamePrefix } from '../configs'
import '../css/style.css'

export default class ReactComponent extends Component {
  render() {
    return (
      <div className={classNamePrefix}>
        <h1>Yo! React Component npm package</h1>
      </div>
    )
  }
}
