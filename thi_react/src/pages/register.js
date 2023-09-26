import '../App.css'
function Register(){
    return(
        <div className='Register' >
        <label>product</label>
        <input type='text'></input><br></br>
        <label>name</label>
        <input type='text'></input><br></br>
        <label>Number Phone</label>
        <input type='text'></input><br></br>
        <label>Email</label>
        <input type='email'></input><br></br>
        <button>Register</button>
        <button>Cancel</button>
        </div>
    )

}
export default Register