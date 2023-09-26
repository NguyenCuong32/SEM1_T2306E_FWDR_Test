import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/home';
import About from './pages/about';
import layout from './pages/layout.css';
import Form from './components/register';

import './App.css';
import { useState } from 'react';

import AboutUs from './AboutUs'

function App() {
  const [tapBar, setTabBar] = useState('Home')
  let router = ''
  switch (tapBar) {
    case "About Us": router = <AboutUs/>
      break;
    case "Register": router = null
      break;
    default: router = <Home/>
      break;
  }
  
  return (
    <div className="App">
      <div className='TapBar'>
        <p onClick={() => {setTabBar("Home")}}>Home</p>
        <p onClick={() => {setTabBar("About Us")}}>About Us</p>
        <p onClick={() => {setTabBar("Register")}}>Register</p>
      </div>
      {router}
    </div>
  );
}

export default App;