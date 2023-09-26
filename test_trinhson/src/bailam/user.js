import React from "react";


function AboutUS(){
    const users =[
        {
            name:"CEO: Nguyen Thi Hanh",
            content:"The fouder is also the general managing director",
            img:'https://th.bing.com/th?id=OIP.pjXYe6_ccZrOYuDbS6AChQHaKm&w=208&h=299&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
        },
        {
            name:"CTO: Nguyen Thanh Binh",
            content:"10 years of experience in building a specialzed technical team",
            img:'https://th.bing.com/th?id=OIP.GDMcJRQIuKkeOJF1oXjEMQHaLI&w=203&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
        },
        {
            name:"CFO: Nguyen Van Hoa",
            content:"5 years of financial management of leading enterprises in Viet Nam",
            img:'https://th.bing.com/th?id=OIP.mgvE6zshZtHYz-yb1tFOUgHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
        },
    ]
    return(
      <div style={{width:"600px", marginTop:"100px"}}>
      <div style={{textAlign:"center", marginBottom:"30px"}}><b>ABout Us</b></div>
        <div style={{display:"flex", width:"600px",justifyContent:"space-between"}}>
            
            {users.map((user) =>(
                <div style={{width:"400px"}}>
                <img src={user.img} style={{width:"100px", borderRadius:"50%"}} ></img>
                <p>{user.name}</p>
                <p>{user.content}</p>
                
                </div>
             
                

            )) }

        </div> 
        </div> 
    )

}
export default AboutUS