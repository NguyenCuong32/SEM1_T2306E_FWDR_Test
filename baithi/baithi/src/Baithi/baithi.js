import {Link,Route,Routes} from "react-router-dom";
import Userinformation from './Userinformation';
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
                        <Route path="/" element={<Home/>}></Route>
                    </Routes>
                </nav>
            </div>
        </body>
        </>
    )
}

