import { Link, Outlet } from "react-router-dom";
import "./page.css";
export default function Layout(){
    return(
        <div>
            <nav>
                <Link className="nav1" to="/" >Home</Link>
                <Link className="nav1" to="/About_Us" >About Us</Link>
                <Link className="nav1" to="/Register" >Register</Link>
            </nav>
            <Outlet/>
        </div>
    );
}