import '../App.css'
import User from '../compunant/user'
import React from 'react';
function about(){
   
    return (
        <React.Fragment>
        <h1 className='about_us'>About US</h1>
        <div className='profile'>
        <User className="user1" name="Nguyen Thi Hanh" pic="https://i.pinimg.com/originals/78/46/75/7846752cfd7b02455fa07c42a5ab2f37.jpg" bio="The founder is also"></User>
        <User className="user1" name="Nguyen Thi Hanh" pic="https://i.pinimg.com/originals/78/46/75/7846752cfd7b02455fa07c42a5ab2f37.jpg" bio="The founder is also"></User>
        <User className="user1" name="Nguyen Thi Hanh" pic="https://i.pinimg.com/originals/78/46/75/7846752cfd7b02455fa07c42a5ab2f37.jpg" bio="The founder is also"></User>
        </div>
        </React.Fragment>
    );
};
export default about;