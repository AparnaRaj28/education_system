import React, { useEffect, useState } from 'react'
import TrainerService from '../../services/TrainerService'
import {Link, useNavigate,useParams} from 'react-router-dom';
import Navbar from '../AdminComponent/Navbar';

const AddTrainer = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    // const [course, setCourse] = useState('')
    const {id} = useParams();
    let navigate= useNavigate();
       const GotoNext = () =>{
            navigate("/admin/trainers");
        }
    
    const saveOrUpdateTrainer = (e) =>{
        e.preventDefault();

        const trainer ={id,firstName, lastName, email, mobile}
        if(id){
            TrainerService.updateTrainer(id, trainer).then((Response) =>{
                console.log(Response.data)
                GotoNext();

            }).catch(error =>{
                console.log(error)
            })

        }else{
            TrainerService.createTrainer(trainer).then((Response) =>{
                console.log(Response.data)
                GotoNext();
    
            }).catch(error =>{
                console.log(error)
            })

        }     
    }
    useEffect(() =>{
        TrainerService.getTrainerById(id).then((Response) =>{
            setFirstName(Response.data.firstName)
            setLastName(Response.data.lastName)
            setEmail(Response.data.email)
            setMobile(Response.data.mobile)
        }).catch(error =>{
            console.log(error)
        })
         
    }, [])

const title = () =>{
    if(id){
        return <h3 className='text-center'> Update Trainer</h3>
    }
    else{
        return <h3 className='text-center'> Add Trainer</h3>
    }
}
  return (
    <div>
        <Navbar/>
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
                        onChange= {(e) =>setFirstName(e.target.value)} required="true"
                        >
                        </input>                  
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label'>Last Name: </label>
                        <input
                        type= "text" placeholder='enter here' name='lastName' value={lastName} className="form-control"
                        onChange= {(e) =>setLastName(e.target.value)}
                        >
                        </input>                  
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label'>Email: </label>
                        <input
                        type= "email" placeholder='enter here' name='email' value={email} className="form-control"
                        onChange= {(e) =>setEmail(e.target.value)}
                        >
                        </input>                  
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label'>Mobile: </label>
                        <input
                        type= "integer" placeholder='enter here' name='mobile' value={mobile} className="form-control"
                        onChange= {(e) =>setMobile(e.target.value)}
                        >
                        </input>                  
                    </div>
                    {/* <div className='form-group mb-2'>
                        <label className='form-label'>Course: </label>
                        <input
                        type= "text" placeholder='enter here' name='course' value={course} className="form-control"
                        onChange= {(e) =>setCourse(e.target.value)}
                        >
                        </input>                  
                    </div> */}
                    <button className='btn btn-success' onClick={(e) =>saveOrUpdateTrainer(e)}>Submit</button>{" "}
                    <Link to="/admin/trainers" className='btn btn-danger'>Cancel</Link>
                </form>

             </div>

        </div>

       </div>

    </div>
  )
}

export default AddTrainer;