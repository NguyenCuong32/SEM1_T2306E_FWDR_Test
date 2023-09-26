import { Outlet, Link } from "react-router-dom";
import'./layout.css';
const layout = ()=>{
    return(
        <div class="item">
            <Link className="item1" to="/home">Home</Link>
            <Link className="item1" to="/user">About Us</Link>
            <Link className="item1" to="/about">Register</Link>
            <img className="item2" src="https://tse2.mm.bing.net/th?id=OIP.Kd53B4pKLWOGRgqS5MyNsAHaEz&pid=Api&P=0&h=180" alt=""/>
            <h2>ABC limited liability companny</h2>
            <h3>Specializing in providing infomation technology solutions in the fields of all, Finance...</h3>
            
            <Outlet />
        </div>
        
        
    )
};

export default layout;