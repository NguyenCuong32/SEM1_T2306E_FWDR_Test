import { Link, Outlet } from "react-router-dom";
import '../App.css'

function layout(){
    return(
        <nav className="nav">
            <Link className=" head" to="/">Home</Link>
            <Link className=" head" to="about">About Us</Link>
            <Link className=" head" to="register">Register</Link>
            <Outlet></Outlet>
        </nav>
    );
};
export default layout;