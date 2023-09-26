import './App.css';
function About(){
  return (
      <div>
          <h3>About us</h3>
      <div className="flex-container1">
        <div className="flex-item3">
          <img className="avatar" src="https://nguoinoitieng.tv/images/nnt/101/0/bfuk.jpg" alt="CEO"></img>
          <p><b>CEO: </b>Nguyen Thi Hanh</p>
          <p>The founder is also the general managing director</p>
          </div>
        <div className="flex-item3">
          <img className="avatar" src="https://hthaostudio.com/wp-content/uploads/2019/08/Anh-Doanh-nhan-31-1.jpg" alt="CTO"></img>
          <p><b>CEO: </b>Nguyen Thanh Binh</p>
          <p>10 years of experience in building a specialized technical tea</p>
        </div>
      </div>
      <div className="flex-item3">
          <img className="avatar" src="https://nguoinoitieng.tv/images/nnt/104/0/bh4t.jpg" alt="CEO"></img>
          <p><b>CFO: </b>Nguyen Van Hoa</p>
          <p>5 years of experience in financial management of leading enterprises in Vietnam</p>
          </div>
      </div>
    );
};

export default About;