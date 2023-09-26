import { Outlet, Link } from "react-router-dom";
import './layout.css'

const layout = ()=>{
    return(
        <div classname="h1">
            <Link to="/home">Home</Link>
            <Link to="/user">Register</Link>
            <Link to="/about">About us</Link>
            <Outlet />
        </div>
        
    )
};

export default layout;