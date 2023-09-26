import './CSS/user.css';
function App ({name,pic}) {
  return (
   <section>
    <img className='user-profile-pic' src={pic} alt={name}/>
    <h2 className='user-name'>Hello, from <span className='user-fist-name'>{name}</span></h2>
   </section>
   );
 }
 function User () {
   const users =[
     {
       name: "CEO: Nguyen Thi Hanh",
       pic: "The founder ís also the general managing director",
     },
     {
       name: "CTO: Nguyen Thanh Binh",
       pic: "10 years of experience in building a specialzied technical team",
     },
     {
       name: "CFO: Nguyen Van Hpa",
       pic:  "5 years of experience in finacial management of leading enterprises in Vietnam",
     },
   ];
   return (
       <div className="User">
         {users.map((usr) => (
        <App name={usr.name} pic={usr.pic} />   
         ))}
     </div>
   );
 }
 export default User;