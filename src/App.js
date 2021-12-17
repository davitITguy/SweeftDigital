
import './App.css';
import React from 'react';
import axios from 'axios';
import SingleUser from './Components/SingleUser';
import ReactstrapTest from './Components/ReactstrapTest';


function App() {
  return (
    <div className="App">
      <ReactstrapTest/>
      <SingleUser/>
    </div>
  );
}

export default App;

