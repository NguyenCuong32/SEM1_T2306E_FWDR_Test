import "./baithi.css";
function Register(){
    return(
        <div classname="body">
            <form>
                <label>Product</label>
                <input type="text"/><br/>
                <label>Name</label> 
                <input type="text"/><br/>
                <label>Phone name</label>
                <input type="number"/><br/>
                <label>Email</label> 
                <input type="text"/><br/>
                <button>Register</button>
                <button>Cancel</button>
            </form>
        </div>
    );
}
export default Register;