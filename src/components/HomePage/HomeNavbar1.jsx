import React from 'react'
import './HomeNavbar.css'
import { Link } from 'react-router-dom';

function HomeNavbar1() {
  return (
    <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' >
            EDU &nbsp;
            <i class="fa-sharp fa-solid fa-graduation-cap"></i>
          </Link>
          {/* <div className='menu-icon' >
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>*/}
            <li className='nav-item'> 
              <Link to='/' className='nav-links' >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
               
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
               
              >
                Contact-Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/studentLogin'
                className='nav-links'>

                
                <button type="button" class="btn btn-outline-light">Sign-In</button>
              </Link>
            
            </li>
            <li className='nav-item'>
              <Link
                to='/adminLogin'
                className='nav-links'>

                
                <button type="button" class="btn btn-outline-light">Admin</button>
              </Link>
            
            </li>
           
       </div>
          
      </nav>
  )
}

export default HomeNavbar1