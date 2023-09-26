import "./baithi.css";
import { Link, Outlet } from "react-router-dom";
function Layout() {
    return (
        <div className="body">
            <nav>
                <Link to="/Home">Home</Link>
                <Link to="/Aboutus">About Us</Link>
                <Link to="/register">Register</Link>
                <Outlet></Outlet>
            </nav>
        </div>

    );
}
export default Layout;