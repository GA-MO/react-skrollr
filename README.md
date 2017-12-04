# React Skrollr
[![npm version](https://badge.fury.io/js/react-skrollr.png)](https://badge.fury.io/js/react-skrollr)

React Component parallax scrolling JavaScript library base on [*Skrollr*](<https://github.com/Prinzhorn/skrollr>)

See [*live demo*](<http://react-skrollr-demo.surge.sh>)



### Getting Started
```
$ npm install --save react-skrollr
```

### Import package

```js
import { ParallaxProvider, Parallax } from 'react-skrollr'
```

### Init config (Optional)
Use init config via props `init` (props type is object)

Skrollr init [*Options*](<https://github.com/Prinzhorn/skrollr#skrollrinitoptions>)

Add `ParallaxProvider` into root app
```js
class App extends React.Component {
  render() {
    return (
      <ParallaxProvider
        init={{
          smoothScrollingDuration: 500,
          smoothScrolling: true,
          forceHeight: false
        }}
      >
      ...
      </>
    )
  }
}
```

### Setting parallax data (Required)
Use data scrolling via props `data` (props type is object)

Skrollr [*Data attr document*](<https://github.com/Prinzhorn/skrollr#absolute-vs-relative-mode>)

```js
const Component = () => {
  return (
    <Parallax
      data={{
        'data-center-center': 'opacity: 1;',
        'data-bottom-top': 'opacity: 0;'
      }}
    >Some content</Parallax>
  )
}
```

### Example use

```js
  class App extends React.Component {
    render() {
      return (
        <ParallaxProvider>
          <Parallax
            data={{
              'data-center-center': 'opacity: 1;',
              'data-bottom-top': 'opacity: 0;'
            }}
          >
            Some content or Component
          </Parallax>
        </ParallaxProvider>
      );
    }
  }
```

Thank you for your suggestions!