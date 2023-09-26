import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Layout from'./pages/layout'
import Home from'./pages/home'
import Register from'./pages/register'
import About from'./pages/about'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
          
          <Route path='register'element={<Register></Register>}></Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
