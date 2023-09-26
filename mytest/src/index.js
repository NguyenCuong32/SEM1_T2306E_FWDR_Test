import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Register from './pages/Register';
import Home from './pages/Home';
import User from './pages/User';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path = "/" element = {<Layout/>}>
      <Route index element={<Home/>}></Route>
      <Route path="Aboutus" element={<User/>}></Route>
      <Route path="Register" element={<Register/>}></Route>
    </Route>
    </Routes>
    </BrowserRouter>
  )
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import About from './pages/Register';
import Home from './pages/Home';
import User from './pages/User';
import NoPage from './pages/Nopage';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path = "/" element = {<Layout/>}>
      <Route index element={<Home/>}></Route>
      <Route path="Aboutus" element={<User/>}></Route>
      <Route path="Register" element={<Register/>}></Route>
    </Route>
    </Routes>
    </BrowserRouter>
  )
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
