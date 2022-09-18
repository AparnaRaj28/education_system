import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

import  { useNavigate  } from 'react-router-dom'
import './Form.css'
import HomeNavbar from '../HomePage/HomeNavbar'
import Footer from '../HomePage/Footer'
import StudentService from '../../services/StudentService2'
import HomeNavbar1 from '../HomePage/HomeNavbar1'

function AdminLogin() {

   const [username,setUsername]=useState("");
   const [password,setPassword]=useState("");
   const [students, setStudents] = useState([])
   const navigate=useNavigate();

const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
  
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 12) {
      errors.password = "Password cannot exceed more than 12 characters";
    }
    return errors;
  };

   function loginDetails()
  {
     if (formValues.username == "admin" && formValues.password=="admin"){
         navigate('/admin');
     }
     else{
      alert("Wrong Admin credentials")
     }
  }

   const backgorund={
     backgorundImage: "url('https://static8.depositphotos.com/1029150/883/i/450/depositphotos_8834910-stock-photo-education.jpg')",

   };

  return (
    <div>
      <HomeNavbar1/>
      <br></br><br></br><br></br>
      <div style={{backgorundImage:"url('https://static8.depositphotos.com/1029150/883/i/450/depositphotos_8834910-stock-photo-education.jpg')"}}>
   
        <form className='form' onSubmit={handleSubmit} >
                <h3 align="center" className='title'>Admin Login</h3>
                <br></br><br></br><br></br><br></br>
                <div className="form-group">
                    <label className='label'>Username</label>
                    <input type="text" className="form-control" placeholder="Enter Username" name="username" autoComplete='off'
                     value={formValues.username}
                         onChange={handleChange} required/>
                </div>
                <p>{formErrors.username}</p>

                 <br></br>
                <div className="form-group">
                    <label className='label'>Password</label>
                    <input type="password" className="form-control" placeholder="Enter Password" name="password"
                     value={formValues.password}
                         onChange={handleChange} required/>
                </div>
                <p>{formErrors.password}</p>
                <br></br>

                {/* <button className="btn btn-dark btn btn-success" onClick={handleSubmit} type="submit">Login</button>{" "} */}
                <button className="btn btn-dark btn btn-success" onClick={loginDetails}>Login</button>{" "}
                 <Link to="/" className='btn btn-danger'>Cancel</Link>
                <p className="forgot-password text-right">
                    Not Registered?  <Link to={"/register"}>Register here</Link>
                </p>
            </form> 
            <Footer/>
            </div>
    </div>
   
  )
  }

export default AdminLogin;