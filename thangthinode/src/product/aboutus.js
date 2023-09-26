import React  from 'react';
import './aboutus.css'
const users_list = [
    {
        chuc:"CEO",
      name: "Nguyen Thi Hanh",
      avata: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlklI17PRZYBv3yXFfPf6bE9c9VZ24Li6o_A&usqp=CAU",
      bio:"The Founder is also the genaral managing director",
    },
    {chuc:"CTO",
      name: "Nguyen Thanh Binh",
      avata: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      bio:"10 years of experience in buiding a speccialized technical team",
    },
    {chuc:"CFO",
      name: "Nguyen Van Hoa ",
      avata: "https://th.bing.com/th/id/OIP.61MxYxog69jFsbZIKP7y6wHaEK?w=294&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      bio:"5 years of experrience in financial management of leading enterprises in Vietnam ",
    }
  ];
function Aboutus() {
 const users=users_list;
  return (
    <div className='list-profite' >
        <h1 className="h1_aboutus" >About Us</h1>
        <div style={{display: 'flex'}}>
      <UsersList  users={users} className='container_us' /> 
      </div></div>
  );
}
function UsersList({users}){
return(
 <div classname='list-user-profite' style={{display: 'flex'}}>
  {users.map((usr) =>

    <User name={usr.name} avata={usr.avata} bio={usr.bio} chuc={usr.chuc} ></User>

  )}
 </div>
)
}
function User({name,avata,bio,chuc}){
  return(

    <div className="profite" style={{margin:'100px'}}> 
    <img src={avata} alt={name} className= 'profite1' style={{width:'300px',height:'300px',borderRadius:'60%' }} /> 
     <p className='profite2'><b>{chuc}</b> : {name}</p>
     <p>{bio}</p>
     </div>
  )
}

export default Aboutus;