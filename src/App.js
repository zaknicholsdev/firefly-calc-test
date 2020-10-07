import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

const App = () => {

  return (
    <div className="App">
      <div id="wrapper">
        <div id="calculator-wrapper">
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default App;
