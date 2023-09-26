
import React  from 'react';
import '../about.css';

const About = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <div className="team">
        <div className="ceo">
          <h2>CEO</h2>
          <p>Nguyen Thi Hanh</p>
          <p>The founder is also the general managing director</p>
        </div>
        <div className="cto">
          <h2>CTO</h2>
          <p>Nguyen Thanh Binh</p>
          <p>10 years of experience in building a specialized technical team</p>
        </div>
        <div className="cfo">
          <h2>CFO</h2>
          <p>Nguyen Van Hoa</p>
          <p>5 years of experience in financial management of leading enterprises in Vietnam</p>
        </div>
      </div>
    </div>
  );
};

export default About;