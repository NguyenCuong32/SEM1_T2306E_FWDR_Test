import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Layout from './pages/layout.js';
import Register from './pager/Register.js';
// import User from './pages/user';
import About from './pages/about Us.js';
// import App1 from './pager/home.js';
import App from './App.js'
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />} >
          <Routes>
            <Route className="layout" path='/' element={<Layout></Layout>}>
              <Route path='Home' element={<Home></Home>}></Route>
              <Route path='About Us' element={<About></About>}></Route>
              <Route path='Register' element={<Register></Register>}></Route>
            </Route>
          </Routes>
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App></App>
  </div>

);
export default App;
