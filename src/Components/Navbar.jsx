import React from 'react'
import Arrow from '../Assets/Vector (6).png'
import  '../Styles/Navbar.css'

function Navbar() {
  return (
    <div>
        <nav className='nav-container'>
            <ul>
            <li>Omingpt <img src={Arrow} alt="" /></li>
            <li><a href='#Blog'>Blog</a></li>
            <li><a href='#Contact'>Contactus</a></li>
            <li><a href='#Sign'>Signin</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar