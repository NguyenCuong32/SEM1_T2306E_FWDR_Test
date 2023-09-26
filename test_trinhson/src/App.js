import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route, Link} from "react-router-dom";
import Home from "./bailam/home"
import AboutUS from './bailam/user';
import Register from "./bailam/register"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <header>
      <Link  to="/">Home</Link>
      <Link style={{margin:"0 10px"}} to="About">About us</Link>
      <Link to="register">Register</Link>
     </header>
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='About' element={<AboutUS />}></Route>
      <Route path='register' element={<Register />}></Route>

     </Routes>

    
      </BrowserRouter>
    </div>
  );
}

export default App;
