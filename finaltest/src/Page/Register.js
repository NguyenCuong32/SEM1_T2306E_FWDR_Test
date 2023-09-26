import './Page.css';
import {Outlet, Link } from "react-router-dom";

const Register=() =>{
    return(
        <div>
        <Link to="/Home">Home</Link>
        <Link to="/AboutUs">About Us</Link>
        <Link to="/Register">Register</Link>
        <Outlet/>
        </div>
    )
}

export default Register;