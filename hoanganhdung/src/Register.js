import './App.css';
function Rergister () {
  return (

<div><br/>
        <form style={{fontSize:20}}>
        <label>
            <b>Product</b>
            {" "} <input className= "re1" style={{fontSize:20}} type="text" required />
          <br></br> <br></br>
          <b>Name</b>
          {" "} <input className= "re2"  style={{fontSize:20}} type="text" required />
          <br></br> <br></br>
          <b>Phone Number</b>
          {" "}  <input className= "re3" style={{fontSize:20}} type="text" required />
          <br></br> <br></br>
          <b>Email</b>
          {" "} <input className= "re4" style={{fontSize:20}} type="text" required />
        </label>
      </form>
      </div>
 
  )
}
export default Rergister;