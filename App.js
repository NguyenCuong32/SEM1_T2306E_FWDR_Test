import './App.css';
import { useState } from 'react';
import Home from './home'
import AboutUs from './aboutme'
import Register from './register'

function App() {
  const [tapBar, setTabBar] = useState('Home')
  let router = ''
  switch (tapBar) {
    case "About Us": router = <AboutUs/>
      break;
    case "Register": router = <Register/>
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