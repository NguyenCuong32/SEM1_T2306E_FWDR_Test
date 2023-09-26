// import logo from './logo.svg';
// import './App-cardvisit.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import  './App1.css';
import { useState, useEffect } from "react";


  function About() {
    const [name, setName] = useState("");
    const [password, setPass] = useState("");
  
    return (
      <form>
        <label>username:
          <input
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          /><br/>
        </label>
        <label>password:
          <input
            type="text" 
            value={password}
            onChange={(e) => setPass(e.target.value)}
          /><br/>
        </label>
        <button type="button" onclick="alert('Hello world!')">submit</button>
      </form>
    )
  }
  export default About;