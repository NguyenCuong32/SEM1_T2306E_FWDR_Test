import { Outlet, Link } from "react-router-dom";
import '../App.css'
const layout = () => {
    return (
        <nav className="Layout">
            <Link className="home" to="/home">Home</Link>
            <Link className="About Us" to="/About US">About Us</Link>
            <Link className="Register" to="/Register">Register</Link>
        </nav>
    );
}
export default layout;