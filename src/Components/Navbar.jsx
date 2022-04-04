import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../styles/shop.css';
import { useSelector } from 'react-redux';

function Navbar() {

    const { cart } = useSelector((store) => ({ ...store }));




  return (
    <div style={{padding:15,backgroundColor:"gray"}}>
  <Link to='/' className='home'>HOME</Link>
  <Link to='/cart' className='home'>CART <span className='cartlen'>({cart.length})</span></Link>
  <Link to='/myorders' className='home'>MY ORDERS</Link>
    </div>
  )
}

export default Navbar