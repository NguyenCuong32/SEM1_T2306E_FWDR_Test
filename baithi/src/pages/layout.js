import { Outlet,Link} from "react-router-dom";
import './layout.css';
const Layout = ()=>{
    return(
        <nav className="top">
            <Link className="link-layout" to='/home'>home</Link>
            <Link className="link-layout" to='/user'>about</Link>
            <Link className="link-layout" to='/table'>register</Link>
            <Outlet />
        </nav>  
    )
};
export default Layout;