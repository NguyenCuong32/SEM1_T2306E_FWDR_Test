import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pager/home.js';
import About from './pager/About Us.js'
import Register from './pager/Register.js';
import './App.css'
function Home() {
    return (
        <BrowserRouter className='pager'>
            <Routes>
                <Route className="layout" path='/' element={<Layout></Layout>}>
                    <Route path='Home' element={<Home></Home>}></Route>
                    <Route path='About Us' element={<About></About>}></Route>
                    <Route path='Register' element={<Register></Register>}></Route>
                </Route>
            </Routes>
            <div className='Avatar'>
                <div className='Anh'><img className='anh1' src='https://manta.edu.vn/wp-content/uploads/2022/12/hinh-anh-nu-sinh-dep-nhat-2-1.jpg'></img></div>
                <div className='comtern'>
                    <h>ABC limited liablity company</h>
                    <br></br>
                    <h>Specializing in providing information technology solutions in the fields of Al,Finance..</h>
                </div>
            </div>
        </BrowserRouter >
    );
}
export default Home;