import { Outlet, Link } from "react-router-dom";
import './App.css';
const Home = () => {
    return(
        <>
        <div>
           <header>
    <div class="navi">
    <Link className="abc" to="/Home">Home</Link>
    <Link className="abc" to="/About Us">About Us</Link>
    <Link  className="abc" to="/About">Register</Link>
            <Outlet />
            </div>
            </header>
            <br/> <br/><br/> <br/>
            <div>
<img className="boderexam1" src = {"http://genk.mediacdn.vn/k:2015/2-1440133142840/facebook-bat-dau-thu-nghiem-dang-anh-dong-tren-fanpage-va-quang-cao.gif"}/>
</div>    
        </div>
        <footer>
        <div class="footer">
          <h1>ABC limited liability company</h1>
          <button class="flex-item6"><a href="https://www.facebook.com/" className="footer">Facebook</a></button>
          <button class="flex-item7"><a href="https://zalo.me/pc" className="footer">Zalo</a></button>
        </div>
      </footer>
        </>
    )
};

export default Home;