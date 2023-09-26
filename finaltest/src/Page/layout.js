import {Outlet, Link } from "react-router-dom";

const layout = () => {
    return(
       <div>
       <Link to="/Home">Home</Link>
       <Link to="/AboutUs">AboutUs</Link>
       <Link to="/Register">Register</Link>
        <Outlet/>
       </div>
    )
};

export default layout;