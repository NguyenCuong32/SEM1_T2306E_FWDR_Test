
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import Layout from './layout';
import About from './about';
import Register from './register'
function App() {
  return ( 
    <BrowserRouter>
      <Layout /> 
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;