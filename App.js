import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Timer(){
  const[count, setCount] = useState(0);
  useEffect(() =>{
    setTimeout(() => {setCount(count+1)});
  },1000);
  return <h1>Count  {count} times</h1>
}

function Calculation(){
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  useEffect(() =>{
    setCalculation(() => count*2);
  },[count]
  );

  return(
    <>
    <p>Count:{count}</p>
    <button onClick={() =>setCount((c) => c+1)}>Click me</button>
    <p>Calculation: {calculation}</p>
    </>
  );
}

function Like(){
  const[count, setCount] = useState(0);
  const[calculation, setCalculation] = useState(0);
  useEffect(() =>{setCalculation(() =>count+1)},[count]);

  return(
    <>
    <button onClick={() => setCount((c) =>c+1)}>👍{count}</button>
    <button onClick={() => setCount((c) =>c-1)}>👎{count}</button>
    </>
  )
}

function User(){
  const pic ="https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
  return(
  
<section>
    <div className='border'>
    <div class="border1">Product</div>
    <div class="border2">User Information</div>
    </div>
    <div className='border'>
    <img className='img' src={pic}></img>
    <div className='grid_container'>
    <div className='grid_item'>Full Name</div>
    <div className='grid_item'>Role</div>
    <div className='grid_item'>Admin.</div>
    </div>
    <div className='grid_container1'>
    <div className='grid_italic'>Nguyen van A</div>
    <div className='grid_italic'>Latest Login</div>
    <div className='grid_italic'>10/10/2023 10:00</div>
    </div>
    </div>
</section>
  )
}

export default User;
