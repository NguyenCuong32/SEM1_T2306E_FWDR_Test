import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import layout from './Layout';
import Home from './Home';
import Register from './Register';
import About from './About';


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


