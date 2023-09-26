import './about.css'

function About(){
    return (
        <div>
            <h1>About us</h1><br></br><br></br>
        <div className='flex-container1'>
          <div className='flex-item1'>
            <img className='avatar' src="https://image.cnbcfm.com/api/v1/image/102136717-RTR4BTSW.jpg?v=1529451523" alt="CEO"></img>
            <p><b>CEO: </b>Nguyen Thi Hanh</p>
            <p>The founder is also the general managing director</p>
            </div>
          <div className='flex-item2'>
            <img className='avatar' src="http://www.gannett-cdn.com/-mm-/09b18c9459e4dd8ab58960e28a898a82203b93c1/c=0-104-2464-1496&r=x1803&c=3200x1800/local/-/media/2014/12/24/USATODAY/USATODAY/635550284208607009-AP-Apple.jpg" alt="CTO"></img>
            <p><b>CEO: </b>Nguyen Thanh Binh</p>
            <p>10 years of experience in building a specialized technical tea</p>
          </div>
        </div>
        <div className='flex-item3'>
            <img className='avatar' src="https://article-imgs.scribdassets.com/401pva7mv46a2g9x/images/fileMRWEXT4E.jpg" alt="CEO"></img>
            <p><b>CFO: </b>Nguyen Van Hoa</p>
            <p>5 years of experience in financial management of leading enterprises in Vietnam</p>
            </div>
        </div>
      );
};

export default About;