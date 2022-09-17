import React,{useEffect, useState} from 'react'
import StudentService from '../services/StudentService';
import {Link,useNavigate, useParams} from 'react-router-dom';

const AddStudent = () => {
    const [firstName, setFirstname] = useState('')
    const [lastName, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [rollId, setRollId] = useState('')
    const {id} = useParams();

    let navigate = useNavigate();
    const GotoNext = () =>{
        navigate("/students");
    }

    const saveOrUpdateStudent =(e)=>{
        e.preventDefault();
        
        const student ={id,firstName,lastName,mobile,email,rollId}
        if(id){
           StudentService.updateStudent(id,student).then((Response) =>{
                console.log(Response.data)
                GotoNext();
            }).catch(error =>{
                console.log(error)
            })
        }
        else{
        StudentService.createStudent(student).then((Response) => {
            console.log(Response.data)
            GotoNext();
        }).catch(error =>{
            console.log(error)
        })
    }
}
useEffect(() =>{
    StudentService.getStudentById(id).then((Response) =>{
        setFirstname(Response.data.firstName)
        setLastname(Response.data.lastName)
        setEmail(Response.data.email)
        setMobile(Response.data.mobile)
        setRollId(Response.data.rollId)
    }).catch(error =>{
        console.log(error)
    })
}, [])
const title = () =>{
    if(id){
        return <h3 className='text-center'> Update Student </h3>
    }
    else{
        return <h3 className='text-center'> Add Student </h3>
    }
}

  return (
    <div>
        <br /><br/>
       <div className='container'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
            {
                title()
            }
             <div className='card-body'>
                <form>
                    <div className='form-group mb-2'>
                        <label className='form-label'>First Name: </label>
                        <input
                        type= "text" placeholder='enter here' name='firstName' value={firstName} className="form-control"
                        onChange= {(e) =>setFirstname(e.target.value)} 
                        required/>                 
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label'>Last Name: </label>
                        <input
                        type= "text" placeholder='enter here' name='lastName' value={lastName} className="form-control"
                        onChange= {(e) => setLastname(e.target.value)}
                        required/>                  
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label'>Email: </label>
                        <input
                        type= "email" placeholder='enter here' name='email' value={email} className="form-control"
                        onChange= {(e) =>setEmail(e.target.value)}
                        required/>                 
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label'>Mobile: </label>
                        <input
                        type= "tel" placeholder='enter here' name='mobile' value={mobile} className="form-control"
                        onChange= {(e) =>setMobile(e.target.value)}
                        required/>                  
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label'>Roll Id: </label>
                        <input
                        type= "text" placeholder='enter here' name='rollId' value={rollId} className="form-control"
                        onChange= {(e) =>setRollId(e.target.value)}
                        required/>                  
                    </div>
                    
                    <button className='btn btn-success' onClick={(e) =>saveOrUpdateStudent(e)}>Submit</button>{" "}
                    <Link to="/students" className='btn btn-danger'>Cancel</Link>
                </form>

             </div>

        </div>

       </div>

    </div>
  )
}

export default AddStudent;