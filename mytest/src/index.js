import ReactDOM from 'react-dom/client';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import About from './pages/Register';
import Home from './pages/Home';
import User from './pages/User';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path = "/" element = {<Layout/>}>
      <Route index element={<Home/>}></Route>
      <Route path="User" element={<User/>}></Route>
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
