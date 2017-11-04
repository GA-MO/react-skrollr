import React from 'react'
import ReactDOM from 'react-dom'
import { ParallaxProvider, Parallax } from 'react-skrollr' // React component name in configs/index.js
import '../css/style.css'

class App extends React.Component {
  render() {
    const data = {
      'data-top-top': 'opacity: 1;transform: rotate(360deg);',
      'data-bottom-top': 'opacity: 0;transform: rotate(0deg);'
    }
    return (
      <ParallaxProvider
        init={{
          smoothScrollingDuration: 1000,
          smoothScrolling: true
        }}
        getScrollTop={scrollTop => console.log('scrollTop', scrollTop)}
      >
        <Parallax data={data}>
          <h2>Start editing to see some magic happen {'\u2728'}</h2>
        </Parallax>
        <Parallax data={data}>
          <h2>Start editing to see some magic happen {'\u2728'}</h2>
        </Parallax>
        <Parallax data={data}>
          <h2>Start editing to see some magic happen {'\u2728'}</h2>
        </Parallax>
        <Parallax data={data}>
          <h2>Start editing to see some magic happen {'\u2728'}</h2>
        </Parallax>
        <Parallax data={data}>
          <h2>Start editing to see some magic happen {'\u2728'}</h2>
        </Parallax>
        <Parallax data={data}>
          <h2>Start editing to see some magic happen {'\u2728'}</h2>
        </Parallax>
        <Parallax data={data}>
          <h2>Start editing to see some magic happen {'\u2728'}</h2>
        </Parallax>
        <Parallax data={data}>
          <h2>Start editing to see some magic happen {'\u2728'}</h2>
        </Parallax>
        <Parallax data={data}>
          <h2>Start editing to see some magic happen {'\u2728'}</h2>
        </Parallax>
        <Parallax data={data}>
          <h2>Start editing to see some magic happen {'\u2728'}</h2>
        </Parallax>
        <Parallax data={data}>
          <h2>Start editing to see some magic happen {'\u2728'}</h2>
        </Parallax>
        <Parallax data={data}>
          <h2>Start editing to see some magic happen {'\u2728'}</h2>
        </Parallax>
        <Parallax data={data}>
          <h2>Start editing to see some magic happen {'\u2728'}</h2>
        </Parallax>
        <Parallax data={data}>
          <h2>Start editing to see some magic happen {'\u2728'}</h2>
        </Parallax>
        <Parallax data={data}>
          <h2>Start editing to see some magic happen {'\u2728'}</h2>
        </Parallax>
        <Parallax data={data}>
          <h2>Start editing to see some magic happen {'\u2728'}</h2>
        </Parallax>
        <Parallax data={data}>
          <h2>Start editing to see some magic happen {'\u2728'}</h2>
        </Parallax>
        <Parallax data={data}>
          <h2>Start editing to see some magic happen {'\u2728'}</h2>
        </Parallax>

        <Parallax data={data}>
          <h2>Start editing to see some magic happen {'\u2728'}</h2>
        </Parallax>
        <Parallax data={data}>
          <h2>Start editing to see some magic happen {'\u2728'}</h2>
        </Parallax>
        <Parallax data={data}>
          <h2>Start editing to see some magic happen {'\u2728'}</h2>
        </Parallax>
      </ParallaxProvider>
    )
  }
}

const rootEl = document.getElementById('root')
ReactDOM.render(<App />, rootEl)
