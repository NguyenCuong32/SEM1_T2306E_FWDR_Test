import { Outlet, Link} from "react-router-dom";
import './layout.css';
const layout= ()=>{
    return(
        <div className="box">
        <nav className="thanhtab">
            <Link className="tab1" to="home">Home</Link>
            <Link className="tab1" to="about">About Us</Link>
            <Link className="tab1" to="user">Register</Link>
            
            <Outlet />
        </nav>
        </div>
    )
}
export default layout;