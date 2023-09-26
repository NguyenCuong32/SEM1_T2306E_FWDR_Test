import '../css/about.css';

function About(){
    return (
        <div>
            <h1>About us</h1><br></br><br></br>
        <div className='flex-container1'>
          <div className='flex-item1'>
            <img className='avatar' src="https://aptech.fpt.edu.vn/tuyensinh/wp-content/uploads/2022/12/5-loi-ich-3.png" alt="CEO"></img>
            <p><b>CEO: </b>Nguyen Thi Hanh</p>
            <p>The founder is also the general managing director</p>
            </div>
          <div className='flex-item2'>
            <img className='avatar' src="https://aptech.fpt.edu.vn/tuyensinh/wp-content/uploads/2022/12/5-loi-ich-3.png" alt="CTO"></img>
            <p><b>CEO: </b>Nguyen Thanh Binh</p>
            <p>10 years of experience in building a specialized technical tea</p>
          </div>
        </div>
        <div className='flex-item3'>
            <img className='avatar' src="https://aptech.fpt.edu.vn/tuyensinh/wp-content/uploads/2022/12/5-loi-ich-3.png" alt="CEO"></img>
            <p><b>CFO: </b>Nguyen Van Hoa</p>
            <p>5 years of experience in financial management of leading enterprises in Vietnam</p>
            </div>
        </div>
      );
};

export default About;