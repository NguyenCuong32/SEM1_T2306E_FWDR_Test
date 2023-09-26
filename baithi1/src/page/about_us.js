import "./page.css";

function AboutUs(){
    const users = [
        {name:"Nguyen Thi Hanh", pic:"https://c2phanchutrinh.edu.vn/wp-content/uploads/2023/05/phuong-ly-la-ai-2-35express-jpg.webp",position:"CEO"},
        {name:"Nguyen Thanh Binh", pic:"https://c2phanchutrinh.edu.vn/wp-content/uploads/2023/05/phuong-ly-la-ai-2-35express-jpg.webp",bio:"10 years of experience in building a specialized technical team",position:"CTO"},
        {name:"Nguyen Van Hoa", pic:"https://c2phanchutrinh.edu.vn/wp-content/uploads/2023/05/phuong-ly-la-ai-2-35express-jpg.webp",bio:"5 years of experience in ficnacial managenment of leading enterprises in VietNam",position:"CFO"},
    ]
    return(
        <div className="about">
            {users.map((user) => <About name={user.name} pic={user.pic} bio={user.bio} position={user.position} />)}
        </div>
    );
}
function About({name,bio,pic,position}){

    return(
        <div>
            <img className="image-about" src={pic}  alt={name} />

            <p className="text-about "><b>{position}</b>: {name}</p>
            <p>{bio}</p>
        </div>
    );
}
export default AboutUs;