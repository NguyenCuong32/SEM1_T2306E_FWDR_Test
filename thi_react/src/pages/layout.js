import { Link, Outlet } from "react-router-dom";
function layout(){
    return(
        <nav className="nav">
            <Link className="head" to="/">home</Link>
            <Link className="head" to="about">About us</Link>
            <Link className="head" to="register"> Register</Link>
        </nav>
    )
}
export default layout;