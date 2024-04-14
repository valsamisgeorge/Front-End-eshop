import React, { useState } from 'react' 
import './Navbar.css'
import logo  from '../Assets/logo.jpg'
import cart_icon  from '../Assets/cart.jpg'
import { Link } from 'react-router-dom'
const Navbar = () => {
    
    const [menu,setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} width="300" height="200" alt="Description" />
            <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}}to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("Men's")}}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link>{menu==="Men's"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Women's")}}><Link style={{textDecoration: 'none'}} to='/womens'>Women</Link>{menu==="Women's"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Kid's")}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="kid's"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to='login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} width="45" height="45" alt="Description"/></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar
