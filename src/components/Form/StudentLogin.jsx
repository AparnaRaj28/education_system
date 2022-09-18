import React from 'react'
import HomeNavbar1 from '../HomePage/HomeNavbar1'
import { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from 'react-hook-form';
import Footer from '../HomePage/Footer'
import StudentService from '../../services/StudentService'

function StudentLogin() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

//    *****************Form Validation**************************************//
const schema = yup.object().shape({
    // username : yup.string().required("username is required"),
    username : yup.string() .required('Email / Phone is required')
                            .test('username', 'Email / Phone is invalid', 
                            (value) => {
                                    return validateEmail(value) || validatePhone(parseInt(value ?? '0'));
                                        }),
    password : yup.string().required("Password is required"),

});
const validateEmail = (email) => {
    return yup.string().email("Email is invalid").isValidSync(email)
 };
 
 const validatePhone = (phone) => {
    return yup.number().integer().positive().test(
       (phone) => {
         return (phone && phone.toString().length >= 10 && phone.toString().length <= 14) ? true : false;
       }
     ).isValidSync(phone);
    }

    const{register,handleSubmit,formState:{errors}}=useForm({
      resolver :  yupResolver(schema),
   });
//********************************************************************************************************* */

 //************************Student Details************************* */
 const [students, setstudents] = useState([])
 useEffect(() => {
     StudentService.getAllStudent().then((Response) =>{
         setstudents(Response.data)
         console.log(Response.data);
     }).catch(error =>{
         console.log(error);
     })
   
 }, [])
 //******************************************************************* */
const navigate=useNavigate();
const onSubmit=(e)=>{
    console.log(e);
    const credentials={username,password}
    console.log(credentials);
    console.log(credentials.username)
    console.log(credentials.password)
    {
      students.map(
        student=>{
        if((credentials.username == student.email) && (credentials.password == student.password))
        {
            console.log("log in")
             navigate( `/student/${student.id}`)
             
            // navigate('{`/update-training/${trainingSchudule.id}`} ')
            // {`/update-training/${trainingSchudule.id}`} 
        }
        else
        {
          console.log("Invalid credentials");
        }
      }
      )
    }
    
   
};

  return (
    <div>
        <div>
      <HomeNavbar1/>
      <br></br><br></br><br></br>
      <div >
   
        <form className='form'  onSubmit={handleSubmit(onSubmit)} >
                <h3 align="center" className='title'>Student Login</h3>
                <br></br><br></br><br></br><br></br>
                <div className="form-group">
                    <label className='label'>Mobile/Email</label>
                    <input type="text" className="form-control" placeholder="Enter Mobile/Email" name="username" autoComplete='off'
                    {...register("username")}
                    onChange = {(e)=>setUsername(e.target.value)}
                     required/>
                </div>
                <p>{errors.username?.message}</p>

                 <br></br>
                <div className="form-group">
                    <label className='label'>Password</label>
                    <input type="password" className="form-control" placeholder="Enter Password" name="password"
                    {...register("password")}
                    onChange = {(e)=>setPassword(e.target.value)}
                     required/>
                </div>
                <p>{errors.password?.message}</p>
                <br></br>

                {/* <button className="btn btn-dark btn btn-success" onClick={handleSubmit} type="submit">Login</button>{" "} */}
                <button className="btn btn-dark btn btn-success" >Login</button>{" "}
                 <Link to="/" className='btn btn-danger'>Cancel</Link>
                <p className="forgot-password text-right">
                    Not Registered?  <Link to={"/register"}>Register here</Link>
                </p>
            </form> 
            <Footer/>
            </div>
    </div>
   


    </div>
  )
}

export default StudentLogin