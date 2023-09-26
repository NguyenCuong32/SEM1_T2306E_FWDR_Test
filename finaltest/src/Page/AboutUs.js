import './Page.css';
import {Outlet, Link } from "react-router-dom";

const AboutUs=() =>{
    const chucvu = "CTO";
    const name = "Nguyen Thi Hanh";
    const pic = "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=600"
    return(
        <body>
        <div>
        <Link to="/Home">Home</Link>
        <Link to="/AboutUs">About Us</Link>
        <Link to="/Register">Register</Link>
        <Outlet/>
        </div>
        <section>
        <img className="user_profile" src={pic} alt={name}/>
        <h2 className="user_name">
        {chucvu}: <span>{name}</span>
        <p>The founder is also the general managing director</p>
      </h2>
        </section>
        </body> 
    )
}

export default AboutUs;