import {BrowserRouter,Route,Routes} from "react-router-dom";
import './App.css';
import  Aboutus from './Baithi/Aboutus';
import  Register from './Baithi/Register';
import Home from './Baithi/Home';
import Layout from './Baithi/Layout';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}></Route>
    <Route path="Aboutus" element={<Aboutus/>} ></Route>
    <Route path="Register" element={<Register/>}></Route>
    <Route path="Home" element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
