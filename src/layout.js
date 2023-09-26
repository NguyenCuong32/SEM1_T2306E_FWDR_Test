import {Link,Outlet} from 'react-router-dom'
const layout = ()=>{
    return(         
        <div className='a'>
        <Link className='pr' to='/Home'>Home</Link>
        <Link className='user1' to='/About'>About Us</Link>
        <Link className='table1' to='/Register'>Register</Link>
        <Outlet />
        </div>
    )
};
export default layout;