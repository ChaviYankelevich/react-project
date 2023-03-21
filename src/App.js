
import React, { useRef, useState,useContext,useEffect } from 'react';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter } from 'react-router-dom'
import Page from './Components/Page';
import Routing from './Components/Routing';
import Form from './Components/Form';

function App() {

  return (

    <div>
      <div className='parent'>
      <img src="../Pictures/logo.png"/></div>
       <Login/>      
        <Page/>
    </div>
  );
}

export default App;
