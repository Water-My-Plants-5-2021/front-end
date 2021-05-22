import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = ()=>{

    return(
        <nav className='navigation'>
            <Link to='/'>Home</Link>
            <Link to='/Login'>Login</Link>
            <Link to='/SignIn'>Sign Up</Link>            
        </nav>
    )
}

export default Navigation;