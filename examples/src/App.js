import React from 'react';
import List from './List';

const App = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Bugcide demo</h1>
      <List sayHello="hello" />
      <button
        type="button"
        onClick={() => {
          throw new Error('Bugcide Error occured');
        }}
      >
        Create Error!
      </button>
      <button
        type="button"
        onClick={() => {
          var array = null;
          var isError = array[0];
        }}
      >
        Create TypeError!
      </button>
      <button
        type="button"
        onClick={() => {
          setTimeout(() => {
            throw new Error('async error occured');
          }, 500);
        }}
      >
        Create Async Error!
      </button>
      <button
        type="button"
        onClick={() => {
          function forever () {
            forever();
          }
          forever();
        }}
      >
        Create Call Stack Error!
      </button>
    </div>
  );
};

export default App;
