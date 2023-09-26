import { BrowserRouter,Routes, Route} from "react-router-dom";
import './App.css';
import Home from './produc/Home';
import AboutUs from './produc/AboutUs';
import Register from './produc/Register';
import Layout from "./produc/layout";
function App() {
  return (
    <BrowserRouter>
      <Layout/>
        <Routes>
          <Route path="/home"  element={<Home/>}></Route>
          <Route path="/aboutus"  element={<AboutUs/>}></Route>
          <Route path="/register"  element={<Register/>}></Route>
        </Routes>     
      </BrowserRouter>
  );
}

export default App;
