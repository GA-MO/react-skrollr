import React from 'react'
import ReactDOM from 'react-dom'
import ReactComponent from 'my-react-component' // React component name in configs/index.js

class App extends React.Component {
  render() {
    return (
      <div>
        <ReactComponent />
      </div>
    )
  }
}

const rootEl = document.getElementById('root')
ReactDOM.render(<App />, rootEl)
