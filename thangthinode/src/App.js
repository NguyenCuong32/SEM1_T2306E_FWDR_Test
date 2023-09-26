
import './App.css';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './product/home';
import Aboutus from './product/aboutus';
import Register from './product/register';
import Layout from './product/layout';
function App() {
  return (
      <BrowserRouter>
      <Layout/>
        <Routes>
          <Route path="/home"  element={<Home/>}></Route>
          <Route path="/aboutus"  element={<Aboutus/>}></Route>
          <Route path="/register"  element={<Register/>}></Route>
        </Routes>     
      </BrowserRouter>
  );
}
export default App;
