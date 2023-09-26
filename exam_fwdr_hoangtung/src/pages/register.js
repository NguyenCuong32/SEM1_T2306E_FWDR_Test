import { useState } from 'react';
import '../css/register.css';

function LoginForm(){
    const [product, setProduct] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    
    const HandleSubmit = (event)=>{
        event.preventDefault();
    };
    return(
        <div>
            <form onSubmit={HandleSubmit}>
                <label className='label1'>Product:</label>
                <input
                    value={product}
                    onChange={(event)=>setProduct(event.target.value)}
                    className='ip'
                    name="product"
                    type="text"
                    required
                />
                <br></br><br></br>
                <label className='label2'>Name:</label>
                <input
                    className='ip'
                    name="name"
                    type="text"
                />
                <br></br><br></br>
                <label className='label3'>Number:</label>
                <input
                    className='ip'
                    name="number"
                    type="text"
                />
                <br></br><br></br>
                <label className='label4'>Email:</label>
                <input
                    className='ip'
                    value={email}
                    onChange={(event)=>setEmail(event.target.value)}
                    name="email"
                    type="email"
                    required
                />
                <br></br><br></br>
                <button 
                    className='button'
                    type="submit">Register
                </button>
                <button 
                    className='button1'>
                    Cancel
                </button>
            </form>
        </div>
    );
}

export default LoginForm;