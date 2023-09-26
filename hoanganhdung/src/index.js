import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Register from './Register';
import About from './About';

function App(){
  return(
  <BrowserRouter>
    <Routes>
     <Route path="/" element={<Layout />} >    
     <Route path="/Home" element ={<Home />}/>    
     <Route path="/About Us" element ={<About />}/>    
     <Route path="/Register" element ={<Register />}/>    
     </Route>
    </Routes>
  </BrowserRouter>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

export default App;
