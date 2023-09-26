import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Layout from './layout';
import Home from './home';
import About from './about';


function App(){
  return(
  <BrowserRouter>
    <Routes>
     <Route path="/layout" element={<Layout />}>
     <Route path="/home" element ={<Home />}/>
     <Route path="/user" element ={<User />}/>
     <Route path="/about" element ={<About />}/>

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


