import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/home';
import Register from './pages/register';
import About from './pages/about';

function App(){
  return(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />} >
      <Route path="home" element ={<Home />} />
      <Route path="about" element ={<About />} />
      <Route path="register" element ={<Register />} />
    </Route>
    </Routes>
  </BrowserRouter>
  )
};

export default App;