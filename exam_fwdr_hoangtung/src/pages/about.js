import '../css/about.css';

function About(){
    return (
        <div>
            <h1>About us</h1><br></br><br></br>
        <div className='flex-container1'>
          <div className='flex-item1'>
            <img className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Woman_at_Lover%27s_Bridge_Tanjung_Sepat_%28cropped%29.jpg/800px-Woman_at_Lover%27s_Bridge_Tanjung_Sepat_%28cropped%29.jpg" alt="CEO"></img>
            <p><b>CEO: </b>Nguyen Thi Hanh</p>
            <p>The founder is also the general managing director</p>
            </div>
          <div className='flex-item2'>
            <img className='avatar' src="https://i.insider.com/63fb826884099d001960d521?width=1000&format=jpeg&auto=webp" alt="CTO"></img>
            <p><b>CEO: </b>Nguyen Thanh Binh</p>
            <p>10 years of experience in building a specialized technical tea</p>
          </div>
        </div>
        <div className='flex-item3'>
            <img className='avatar' src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="CEO"></img>
            <p><b>CFO: </b>Nguyen Van Hoa</p>
            <p>5 years of experience in financial management of leading enterprises in Vietnam</p>
            </div>
        </div>
      );
};

export default About;