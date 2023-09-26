import { Outlet,Link} from "react-router-dom";
import './layout.css'
const Layout = ()=>{
    return(
        <nav>
            <Link className="link-layout" to='/home'>home</Link>
            <Link className="link-layout" to='/aboutus'>about us</Link>
            <Link className="link-layout" to='/register'>register</Link>
            <Outlet />
        </nav>  
    )
};
export default Layout;