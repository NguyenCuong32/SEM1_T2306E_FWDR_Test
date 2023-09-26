import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Page/Home';
import AboutUs from './Page/AboutUs';
import Layout from './Page/layout';
import Register from './Page/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/AboutUs" element={<AboutUs/>}></Route>
      <Route path="/Register" element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

export default App;
