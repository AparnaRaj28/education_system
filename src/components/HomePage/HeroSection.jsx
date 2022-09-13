import React from 'react'
import { Link } from 'react-router-dom'
import './HeroSection.css'
import { useNavigate } from 'react-router-dom'

function HeroSection() {
  
  const navigate=useNavigate();

  const navigateToRegister=()=>{
    navigate('/register');
  };


  return (
    <div className='hero-container'>
        <h1>Education System</h1>
        <div>
        <button type="button" class="btn btn-outline-dark" onClick={navigateToRegister}>Register here</button>
        </div>
    </div>
  )
}

export default HeroSection