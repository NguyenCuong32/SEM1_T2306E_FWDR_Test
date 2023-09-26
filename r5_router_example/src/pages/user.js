import './user.css';
function User(){
    const name = "Văn Lâm";
    const pic = "https://tse2.mm.bing.net/th?id=OIP.Jkn2BQUHRqoqZy5Is9UcKAHaE8&pid=Api&P=0&h=220";
    return(
      <section>
        <img className="user-profile-pic" src ={pic} alt = {name}/>
        <h2>
          Hello, <span>{name}</span>
        </h2>
      </section>
      
    );
  }
  export default User;