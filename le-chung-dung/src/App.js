import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Layout from './pages/layout';
import Home from './pages/home';
import About from './pages/about'
import Register from './pages/register'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout></Layout>}>
        <Route index element={<Home></Home>} ></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
