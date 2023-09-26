import '../App.css'
function register(){
    return (
        <div className='Register'>
        <label className='label'>Product</label>
        <input className='input' type='text'></input><br></br>
        <label className='label'>Name</label>
        <input className='input' type='text'></input><br></br>
        <label className='label'>Number Phone</label>
        <input className='input' type='number'></input><br></br>
        <label className='label'>Email</label>
        <input className='input' type='email'></input><br></br>
        <button className='button_r'>Register</button>
        <button className='button_r'>Cancel</button>
        </div>
    );
};
export default register;