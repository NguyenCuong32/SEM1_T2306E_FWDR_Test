import {Link,Route,Routes} from "react-router-dom";
import './baithi.css';
function Home(){
    return(
        <>
        <body>
            <div>
                <nav>
                <Link to="/">Home</Link>
                <link to="/">Aboutus</link>
                <link to="/">Register</link>
                </nav>
                <nav>
                    <Routes>
                        <Route path="/" element={<Layout/>}></Route>
                        <Route path="/Home" element={<Home/>}></Route>
                        <Route path="/Aboutus" element={<Aboutus/>}></Route>
                        <Route path="/Register" element={<Register/>}></Route>
                    </Routes>
                </nav>
            </div>
                <div>
                    <img src="https://www.bing.com/images/search?view=detailV2&ccid=LRv1AWe7&id=78D42483CB1743F5BF8E38DC370442B148641FC4&thid=OIP.LRv1AWe7wB5XIAkghO47-QHaEo&mediaurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.2d1bf50167bbc01e5720092084ee3bf9%3Frik%3DxB9kSLFCBDfcOA%26riu%3Dhttp%253a%252f%252fthuthuatphanmem.vn%252fuploads%252f2018%252f09%252f11%252fhinh-anh-dep-6_044127357.jpg%26ehk%3Dg1hC5ADWBCALT4vPZWI4M%252fmjOeSVF32fzLUV6Iw7aN4%253d%26risl%3D%26pid%3DImgRaw%26r%3D0&exph=1200&expw=1920&q=%e1%ba%a3nh+%c4%91%e1%ba%b9p&simid=608006033532861190&form=IRPRST&ck=4E24C9007045E06644A1B42A2A157F37&selectedindex=0&vt=0&sim=11"></img>
                </div>
                <div>
                    <h1>ABC limeted liability company</h1>
                    <h3>Specializing providing information technology soluti...</h3>
                </div>
        </body>
        </>
    )
}