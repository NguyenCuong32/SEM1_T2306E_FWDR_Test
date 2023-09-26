import "./App.css";
function AboutUs() {
  return (
    <h3 className='AboutUs'>
      About Us
      <div className='Wrap2child'>
        <div className='WrapCircle'>
          <div className='Circle' style={{ backgroundColor: "greenyellow" }} />
          <p>CEO: Nguyen Thi Hanh</p>
          <p>The founder is also the general managing director</p>
        </div>
        <div className='WrapCircle'>
          <div className='Circle' style={{ backgroundColor: "orange" }} />
          <p>CTO: Nguyen Thanh Binh</p>
          <p>
            10 years of experience in building a specicalized technical team
          </p>
        </div>
      </div>
      <div className='WrapCircle'>
        <div className='Circle' style={{ backgroundColor: "blue" }} />
        <p>CFO: Nguyen Van Hoa</p>
        <p>5 years of experience in financial management of leading enterprises in Vietnam </p>
      </div>
    </h3>
  );
}

export default AboutUs;