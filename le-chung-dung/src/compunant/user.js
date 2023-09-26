

function user(prop){
    return(
        <div>
        <img className="img_user" src={prop.pic} alt={prop.name}></img>
        <h2>CIO:{prop.name}</h2>
        <p>{prop.bio}</p>
        </div>
    );
};
export default user;