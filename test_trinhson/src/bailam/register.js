import React from "react";
import "./register.css"
import { useState } from "react";

function Register(){
    var [produc,setproduc] =useState('');
    var [name, setName]= useState("");
    
    function butonCLick(){
        if(produc===""){

        }

        if(name==""){

        }

        
    }
    return (
        <div style={{margin:"60px"}}>
            <form>
            <div>
            <table>
                <tr>
                    <th>product</th>
                    <td><input onBlur={(e)=>setproduc(e.target.value)}></input></td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td><input onBlur={(e)=>setName(e.target.value)} ></input></td>
                </tr>
                <tr>
                    <th>Phone Number</th>
                    <td><input ></input></td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td><input  ></input></td>
                </tr>
            </table>
               
            </div>
            <div style={{margin:"20px 0 0 150px", }}>
                <buton onClick ={butonCLick} className="Register">Register</buton>
                <buton className="cancel" >Cancel</buton>
            </div>
            </form>
        </div>
    )
}
export default Register