import React, { useState } from "react";
import './App.scss';
import Login from './page_components/Login';
import Signup from './page_components/signup';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <Signup/>
    </div>
  );
}

export default App;
