import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

import  { useNavigate  } from 'react-router-dom'
import './Form.css'
import HomeNavbar from '../HomePage/HomeNavbar'
import Footer from '../HomePage/Footer'
import StudentService from '../../services/StudentService2'

function Login() {

   const [username,setUsername]=useState("");
   const [password,setPassword]=useState("");
   const [students, setStudents] = useState([])
   const navigate=useNavigate();

//    useEffect(() => {
//     StudentService.getAllStudents().then((response)=>{
//         setStudents(response.data)
//         console.log(response.data);
//      }).catch(error =>{
//         console.log(error);
//      })
  
// }, [])

   function loginDetails()
  {
     if (username == "admin" && password=="admin"){
         navigate('/admin');
     }
  }

  return (
    <div>
      <HomeNavbar/>
     <br></br><br></br><br></br>
        <form className='form'>
                <h3 align="center" className='title'>Login</h3>
                <br></br><br></br><br></br><br></br>
                <div className="form-group">
                    <label className='label'>Username/Email</label>
                    <input type="text" className="form-control" placeholder="Username/Email" name="uname" autoComplete='off'
                     onChange={(e)=>setUsername(e.target.value)} required/>
                </div>
                 <br></br>
                <div className="form-group">
                    <label className='label'>Password</label>
                    <input type="password" className="form-control" placeholder="Password" name="password"
                     onChange={(e)=>setPassword(e.target.value)} required/>
                </div>

                <br></br>

                <button className="btn btn-dark btn-lg btn-block" onClick={loginDetails}>Login</button>
                <p className="forgot-password text-right">
                    Not Registered?  <Link to={"/register"}>Register here</Link>
                </p>
            </form> 
            <Footer/>
    </div>
   
  )
  }

export default Login