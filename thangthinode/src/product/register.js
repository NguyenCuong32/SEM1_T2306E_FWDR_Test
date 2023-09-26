import React from "react";
import "./rigister.css"
function Register(){
    return (
        <div style={{margin:"60px"}}>
            <form>
            <div>
            <table>
                <tr>
                    <th>product</th>
                    <td><input ></input></td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td><input ></input></td>
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
                <buton className="Register">Register</buton>
                <buton className="cancel" >Cancel</buton>
            </div>
            </form>
        </div>
    )
}
export default Register