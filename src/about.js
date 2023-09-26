import React from "react";
import './about.css'

function About(){
    const users =[
        {
            name:"CEO: Nguyen Thi Hanh",
            content:"The fouder is also the general managing director",
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk9KtE-G30fMrNskLkfF1d-5IGawFj0POXug&usqp=CAU'
        },
        {
            name:"CTO: Nguyen Thanh Binh",
            content:"10 years of experience in building a specialzed technical team",
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPl6cN04e_V_Qgy4ik4CHODlay32-cYL5MMw&usqp=CAU'
        },
        {
            name:"CFO: Nguyen Van Hoa",
            content:"5 years of financial management of leading enterprises in Viet Nam",
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc46jtDyJqgBjM6Km-UCJ33XlOy4PBZfvPhg&usqp=CAU'
        },
    ]
    return(
      <div className="about1">
      <div style={{textAlign:"center"}}><h4>ABout Us</h4></div>
        <div style={{display:"flex"}}>
            
            {users.map((user) =>(
                <div className="about2">
                <img src={user.img} style={{width:"200px",height:"200px" , borderRadius:"50%"}} ></img>
                <p>{user.name}</p>
                <p>{user.content}</p>
                
                </div>
             
                

            )) }

        </div> 
        </div> 
    )

}
export default About;