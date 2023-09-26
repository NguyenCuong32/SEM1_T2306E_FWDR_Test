import './App.css';
function Rergister () {
  return (

<div>
        <form style={{fontSize:20}}>
        <label>
            <b>Product</b>
            {" "} <input style={{fontSize:20}} type="text" required />
          <br></br> <br></br>
          <b>Name</b>
          {" "} <input style={{fontSize:20}} type="text" required />
          <br></br> <br></br>
          <b>Phone number</b>
          {" "}  <input style={{fontSize:20}} type="text" required />
          <br></br> <br></br>
          <b>Email</b>
          {" "} <input style={{fontSize:20}} type="text" required />
        </label>
      </form>
      </div>
 
  )
}
export default Rergister;