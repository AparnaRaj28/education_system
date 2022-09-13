import React, { useState } from 'react'
import './Form.css'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import HomeNavbar from '../HomePage/HomeNavbar'
import Footer from '../HomePage/Footer'

function Register() {
  


  return (
    <div>
        <HomeNavbar/>
        <br></br><br></br><br></br>
        <form className='form'>
                <h3 align="center" className='title'>Register</h3>

                <div className="form-group">
                    <label className='label'>First name</label>
                    <input type="text" className="form-control" placeholder="Enter First Name" name="fullname"
                     required/>
                </div>

                <div className="form-group">
                    <label className='label'>Last name</label>
                    <input type="text" className="form-control" placeholder="Enter Last Name" name="fullname"
                     required/>
                </div>

                <div className="form-group">
                    <label className='label'>Mobile</label>
                    <input type="number" className="form-control" placeholder="Enter mobile" name="mobile" 
                     required/>
                </div>

                <div className="form-group">
                    <label className='label'>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" 
                     required/>
                </div>

                <div className="form-group">
                    <label className='label'>Address</label>
                    <input type="text" className="form-control" placeholder="Address"  name="address"
                     required/>
                </div>

                <div className="form-group">
                    <label className='label'>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password"
                     required/>
                </div>

                <div className="form-group">
                    <label className='label'>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Re-Enter password" name="password"
                     required/>
                </div>


                <button type="submit" className="btn btn-dark btn-lg btn-block" >Register</button>
                <p className="forgot-password text-right">
                    Already registered <Link to={"/sign-in"}>Login here</Link>
                </p>
            </form>
        
        <Footer/>
    </div>
  )
}

export default Register