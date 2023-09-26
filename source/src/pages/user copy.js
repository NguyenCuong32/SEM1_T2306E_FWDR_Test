import  './App1.css';
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
function User(props) {
   const name1 = "Gigi Hadid" ;
   const name2 = "Leonardo DiCaprio" 
    const pic = props.pic;
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [calculation, setCalculation] = useState(0);
    useEffect(() => {
      setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here
  return (
   <>

   <section>
    <table>
      <tr>
        <td colSpan={2}>About us</td>
       
      </tr>
      <tr>
        <td ><img className="boderexam1" src = {"https://dailynews.mcmaster.ca/wp-content/uploads/sites/3/revslider/home-desktop/circle-blue-overlay.png"} width="300" height="380" alt = {name2}/></td>
        
      </tr>
      <tr>
      <td ><img className="boderexam1" src = {"https://dailynews.mcmaster.ca/wp-content/uploads/sites/3/revslider/home-desktop/circle-blue-overlay.png"} width="300" height="380" alt = {name2}/></td>
      <td ><img className="boderexam1" src = {"https://dailynews.mcmaster.ca/wp-content/uploads/sites/3/revslider/home-desktop/circle-blue-overlay.png"} width="300" height="380" alt = {name2}/></td>

      </tr>
       <tr>
       <td><p style={{fontWeight:'bold'}}>Number of likes: {count}</p> </td>
      <td><p style={{fontWeight:'bold'}}>Number of dislikes: {count1}</p></td> 
      </tr>

    </table>

   </section>
 
  
  {/* <p>Sum of follow: {count}+{count1}</p> */}
  

      
   </>
  )
}
export default User;