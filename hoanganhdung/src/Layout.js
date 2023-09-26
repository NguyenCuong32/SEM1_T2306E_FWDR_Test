import { Outlet, Link } from "react-router-dom";
import './App.css';
const Layout = () => {
    return(
        <div>
           <header>
    <div class="navi">
    <Link className="abc" to="/Home">Home</Link>
    <Link className="abc" to="/About Us">About Us</Link>
    <Link  className="abc" to="/About">Register</Link>
            <Outlet />
            </div>
            </header>
        </div>
    )
};

export default Layout;