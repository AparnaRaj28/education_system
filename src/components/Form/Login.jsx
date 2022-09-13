import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import  { useNavigate  } from 'react-router-dom'
import './Form.css'
import HomeNavbar from '../HomePage/HomeNavbar'
import Footer from '../HomePage/Footer'

function Login() {

  return (
    <div>
      <HomeNavbar/>
     <br></br><br></br><br></br>
        <form className='form'>
                <h3 align="center" className='title'>Login</h3>
                <br></br><br></br><br></br><br></br>
                <div className="form-group">
                    <label className='label'>Username/Email</label>
                    <input type="text" className="form-control" placeholder="Username/Email" name="uname"
                     required/>
                </div>
                 <br></br>
                <div className="form-group">
                    <label className='label'>Password</label>
                    <input type="password" className="form-control" placeholder="Password" name="password"
                     required/>
                </div>

                <br></br>

                <button type="submit" className="btn btn-dark btn-lg btn-block" >Login</button>
                <p className="forgot-password text-right">
                    Not Registered?  <Link to={"/register"}>Register here</Link>
                </p>
            </form> 
            <Footer/>
    </div>
   
  )
  }

export default Login