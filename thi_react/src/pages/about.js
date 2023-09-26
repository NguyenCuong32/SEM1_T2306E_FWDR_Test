import '../App.css'
import User from'../compunant/user'
import React from 'react'

function about(){
    return(
       <div>
        <React.Fragment>
        <h1 className='about us'>About us</h1>
        <User name="nguyen thi lan" pic="https://studio.com.vn/wp-content/uploads/2022/03/39999935574_11b6d8805f_o-1.jpg"></User>
        <User name="nguyen thi lau" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYdhxiGmp5VekTSJ37v1Y22DgVsOeV09mYrg&usqp=CAU"></User>
        <User name="nguyen thi tuyen" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZFh6I98dg8JDdvnj_-TnY2lmAqbZfFq5QEg&usqp=CAU"></User>
        </React.Fragment>
        
       </div>
    )

}
export default about