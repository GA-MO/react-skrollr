import React, { Component } from 'react'
import { classNamePrefix } from '../configs'
import './style.css'

export default class App extends Component {
  render() {
    return (
      <div className={classNamePrefix}>
        <h1>Yo! React Component npm package</h1>
      </div>
    )
  }
}
