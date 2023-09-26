import Home from "./page/home";
import AboutUs from "./page/about_us";
import Register from "./page/register";
import Layout from "./page/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element= {<Home/>}/>
            <Route path="/About_Us"  element= {<AboutUs/>}/>
            <Route path="/Register" element= {<Register/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
