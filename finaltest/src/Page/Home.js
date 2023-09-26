import './Page.css';
import {Outlet, Link } from "react-router-dom";

const Home=() =>{
    const pic ="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=600";
    return(
        <body>
         <div>
        <Link to="/Home">Home</Link>
        <Link to="/AboutUs">About Us</Link>
        <Link to="/Register">Register</Link>
        <Outlet/>
        </div>
        <img className='img' src={pic}></img>
        <p className='text1'>ABC limited liability Company</p>
        <p>Specializing in providing information technology  soulutions in the fields of AI, Fiance,...</p>
        </body>

    )
}

export default Home;