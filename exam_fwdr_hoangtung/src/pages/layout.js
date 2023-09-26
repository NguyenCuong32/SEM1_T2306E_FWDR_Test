import { Outlet, Link } from "react-router-dom";
import '../css/layout.css';

const layout = ()=>{
    return(
        <nav className='layout'>
            <Link className='space' to ="/home">Home</Link>
            <Link className='space' to ="/about">About Us</Link>
            <Link className='space' to ="/register">Register</Link>
            <Outlet /> 
        </nav>
    )
};

export default layout;