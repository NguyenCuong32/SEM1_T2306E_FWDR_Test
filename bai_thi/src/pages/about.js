import './about.css'
const users_list = [
    {
      chuc:"CEO",
      name: "Nguyen Thi Hanh",
      avata: "https://scontent.fhan3-3.fna.fbcdn.net/v/t1.6435-9/142371472_432198654598079_3424981696182781482_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yfBJ7OVucdsAX_LsKAa&_nc_ht=scontent.fhan3-3.fna&oh=00_AfCMNhdqEHbC7hSYP_NOadqeVO6Ey9pYy4B74yYdVv1qQQ&oe=653A3585",
      bio:"The Founder is also the genaral managing director",
    },
    {
      chuc:"CTO",
      name: "Nguyen Thanh Binh",
      avata: "https://scontent.fhan3-3.fna.fbcdn.net/v/t1.6435-9/142371472_432198654598079_3424981696182781482_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yfBJ7OVucdsAX_LsKAa&_nc_ht=scontent.fhan3-3.fna&oh=00_AfCMNhdqEHbC7hSYP_NOadqeVO6Ey9pYy4B74yYdVv1qQQ&oe=653A3585",
      bio:"10 years of experience in buiding a speccialized technical team",
    },
    {
      chuc:"CFO",
      name: "Nguyen Van Hoa ",
      avata: "https://scontent.fhan3-3.fna.fbcdn.net/v/t1.6435-9/142371472_432198654598079_3424981696182781482_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yfBJ7OVucdsAX_LsKAa&_nc_ht=scontent.fhan3-3.fna&oh=00_AfCMNhdqEHbC7hSYP_NOadqeVO6Ey9pYy4B74yYdVv1qQQ&oe=653A3585",
      bio:   "5 years of experrience in financial management of leading enterprises in Vietnam ",
    }
  ];
function About() {
 const users=users_list;
  return (
<div>
        <h1>About Us</h1>
        <div style={{display: 'flex'}}>
      <UsersList  users={users} /> 
</div>
</div>
  );
}
function UsersList({users}){
return(
 <div style={{display: 'flex'}}>
  {users.map((usr) =>

    <User name={usr.name} avata={usr.avata} bio={usr.bio} chuc={usr.chuc} ></User>

  )}
</div>
)
}
function User({name,avata,bio,chuc}){
  return(

    <div style={{margin:'100px'}}> 
    <img src={avata} alt={name} style={{width:'300px',height:'300px',borderRadius:'60%' }} /> 
     <p><b>{chuc}</b> : {name}</p>
     <p>{bio}</p>
     </div>
  )
}

export default About;
