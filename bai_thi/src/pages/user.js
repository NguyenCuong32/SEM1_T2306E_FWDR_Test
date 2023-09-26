import './user.css';
function User(){

    const name="John";
    const picture = 
    "https://i.pinimg.com/originals/ea/67/a6/ea67a62202f703a351e20354be1d7876.jpg";
    return(
        
        <section>
         <div>
         <img className="profile"src={picture}alt={name} />
            <h2>
                Hello,im <span>{name}</span>
            </h2>
         </div>
         <div>
         <img className="profile"src={picture}alt={name} />
            <h2>
                Hello,im <span>{name}</span>
            </h2>
         </div>
        </section>
    );
}
export default User;