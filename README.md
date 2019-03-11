## Basic Height Transition Library for React
Simple height transition for collapse elements.

## Installation
This library written with react-hook so you have to install verison of react 16.8.4 or above.
```sh
npm i height-transition -S
```

## Setup
Just connect your button with its ref and pass to props HeightTransition component.
```javascript
import React, { Fragment, useRef } from 'react';
import HeightTransition from 'height-transition';

const App = () => {
   const toggleElem = useRef(null);
     return (
    <Fragment>
      <button ref={toggleElem}>Toggle</button>
      <HeightTransition 
         styles={styles} 
         toggle={toggleElem} 
         animation="ease-out" 
         time="100ms"
         >
        Your Content
      </HeightTransition>
    </Fragment>
  );
}
```

## API
| Api | Description | Default |
| ------ | ------ | ------ |
| styles | Set your own style. |
| toggle | Set your element ref |
| animation | Set your animation style | default : "ease" |
| time | Set your animation time | default : "300ms" |

## Live Example

[![Checkout](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/381vprmr15?fontsize=14)

## License
MIT