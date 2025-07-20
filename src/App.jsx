import React, { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  const addOne = () => setCount(prev => prev + 1);
  const add100 = () => setCount(prev => prev + 100);

  const increase = () => {
    addOne();
    if (count % 5 === 0) {
      add100();
    }
  };

  return (
    <div className="app">
      <div className="counter">{count}</div>
      <button type="button" className="add1" onClick={addOne}>
        Add 1
      </button>
      <button type="button" className="add100" onClick={add100}>
        Add 100
      </button>
      <button type="button" className="increase" onClick={increase}>
        Increase
      </button>
    </div>
  );
};
