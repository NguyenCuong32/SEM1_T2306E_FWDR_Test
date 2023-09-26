import { Outlet, Link } from "react-router-dom";
import '../pages/layout.css'

const layout = ()=>{
    return(
        <nav className="navLayout">
             <Link to="/home" className="layout">Home</Link>
            <Link to="/about" className="layout">About Us</Link>
            <Link to="/register" className="layout">Register</Link>
            <Outlet />
            </nav>
           
        
    )
};

export default layout;