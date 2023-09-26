import { Outlet, Link } from "react-router-dom";
const Layout =() =>{
    return (
        <div className="user">
        <nav className="nav-list">
             <Link to="/">Home</Link>
            <Link to="/pages/User">About Us</Link>
            <Link to="/pages/Register">Register</Link>
        </nav>
        <Outlet />
        </div>
  )
};

export default Layout;