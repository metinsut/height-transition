import React, { useState, Fragment, useRef } from 'react';
import HeightTransition from './HeightTransition';

const App = () => {

  const data = [
    {
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, qui!"
    },
    {
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, qui!"
    }
  ];
  const dummy = {
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, qui!"
  };

  const [array, setArray] = useState(data);

  const pushData = () => {
    setArray(state => [...state, dummy]);
  };
  const resetData = () => {
    setArray(data);
  };

  const styles = {
    backgroundColor: '#d1d1d1',
    width: '300px'
  };

  const toggleElem = useRef(null);

  return (
    <Fragment>
      <div>
        <button ref={toggleElem}>Toggle</button>
        <button onClick={pushData}>Add Data</button>
        <button onClick={resetData}>Reset</button>
      </div>
      <HeightTransition styles={styles} toggle={toggleElem} animation="ease-out" time="100ms">
        {array.map((item, key) => (
          <p key={key}>{item.name}</p>
        ))}
      </HeightTransition>
    </Fragment>
  );
}

export default App;
