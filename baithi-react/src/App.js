import './App.css';
import { useState } from 'react';
import Home from './home'
import About from './about'
import Form from './register'

function App() {
  const [tapBar, setTabBar] = useState('Home')
  let router = ''
  switch (tapBar) {
    case "About Us": router = <About/>
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