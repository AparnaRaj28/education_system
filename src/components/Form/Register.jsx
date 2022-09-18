import React, { useState } from 'react'
import './Form.css'
import { Link, useNavigate } from 'react-router-dom'
import HomeNavbar from '../HomePage/HomeNavbar'
import Footer from '../HomePage/Footer'
import {useForm} from 'react-hook-form';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import StudentService from '../../services/StudentService'
import HomeNavbar1 from '../HomePage/HomeNavbar1'

function Register() {
  
//    *****************Form Validation**************************************//
    const passwordRegExp =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/
    const schema = yup.object().shape({
        firstName : yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').max(40).required("First name is required"),
        lastName :yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').max(40).required("Last name is required"),
      
        mobile : yup.string().required("Mobile is required").min(10,"Mobile must contain 10 digits").max(10,"Mobile must contain 10 digits").matches(phoneRegExp,"Invalid mobile"),
        email : yup.string().email("Invalid email").required("Email is required"),
        address : yup.string().required("Address is required"),
        password : yup.string().required("Password is required").min(4,"Password must contain atleast 4 characters").max(12,"Password cannot exceed 12 characters"),
        confirmPassword : yup.string().oneOf([yup.ref("password"),null],"Passwords must match").required("Re-enter password"),

    });


    const{register,handleSubmit,formState:{errors}}=useForm({
       resolver :  yupResolver(schema),
    });

    //    *****************Register user data**************************************//

   const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')

    const navigate=useNavigate();

//     const savePayment=(e)=>{
//         e.preventDefault();

//         const payment={amountpaid,decription,paymentDate}
//         console.log(payment);
//         PaymentService.AddPayment(payment).then((response)=>{
//             console.log(response.data)
//            navigate('/getallpayments')

//         }).catch(error=>{
//             console.log(error)
//         })
//     }
//  onClick={(e)=>savePayment(e)}

    const onSubmit=(e)=>{
        console.log(e);
        // e.preventDefault();

        const student={firstName,lastName,mobile,email,address,password}
        console.log(student);
        StudentService.createStudent(student).then((response)=>{
            console.log(response.data);
            alert("Student succesfully registered");
            navigate("/studentLogin");
        })
        .catch(error=>{
            console.log(error)
        })
        // PaymentService.AddPayment(payment).then((response)=>{
        //     console.log(response.data)
        //    navigate('/getallpayments')

        // }).catch(error=>{
        //     console.log(error)
        // })


    };
  

  return (
    <div>
        <HomeNavbar1/>
        <br></br><br></br><br></br>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <h3 align="center" className='title'>Register</h3>

                <div className="form-group">
                    <label className='label'>First name</label>
                    <input type="text" className="form-control" placeholder="Enter First Name" name="fullname" autoComplete='off'
                            {...register("firstName")}
                            value={firstName}
                            onChange = {(e)=>setFirstName(e.target.value)}
                     />
                     <p>{errors.firstName?.message}</p>
                </div>

                <div className="form-group">
                    <label className='label'>Last name</label>
                    <input type="text" className="form-control" placeholder="Enter Last Name" name="fullname" autoComplete='off'
                       {...register("lastName")}
                       value={lastName}
                       onChange = {(e)=>setLastName(e.target.value)}
                       />
                        <p>{errors.lastName?.message}</p>
                </div>

                <div className="form-group">
                    <label className='label'>Mobile</label>
                    <input type="number" className="form-control" placeholder="Enter mobile" name="mobile" autoComplete='off'
                     {...register("mobile")}
                            value={mobile}
                            onChange = {(e)=>setMobile(e.target.value)}
                     />
                      <p>{errors.mobile?.message}</p>
                </div>

                <div className="form-group">
                    <label className='label'>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" autoComplete='off'
                      {...register("email")}
                      value={email}
                      onChange = {(e)=>setEmail(e.target.value)}
                      />
                       <p>{errors.email?.message}</p>
                </div>

                <div className="form-group">
                    <label className='label'>Address</label>
                    <input type="text" className="form-control" placeholder="Address"  name="address" autoComplete='off'
                      {...register("address")}
                      value={address}
                      onChange = {(e)=>setAddress(e.target.value)}
                      />
                       <p>{errors.address?.message}</p>
                </div>

                <div className="form-group">
                    <label className='label'>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" autoComplete='off'
                     {...register("password")}
                     value={password}
                     onChange = {(e)=>setPassword(e.target.value)}
                     />
                      <p>{errors.password?.message}</p>
                </div>

                <div className="form-group">
                    <label className='label'>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Re-Enter password" name="password" autoComplete='off'
                       {...register("confirmPassword")}/>
                        <p>{errors.confirmPassword?.message}</p>
                </div>


                <button type="submit" className="btn btn-dark btn-lg btn-block" >Register</button>
                <p className="forgot-password text-right">
                    Already registered <Link to={"/studentLogin"}>Login here</Link>
                </p>
            </form>
        
        {/* <Footer/> */}
    </div>
  )
}

export default Register