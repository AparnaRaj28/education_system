import React, { useState,useEffect } from 'react'

import {Link, Navigate, useNavigate} from 'react-router-dom'



import TrainingSchuduleService from '../../../services/TrainingSchuduleService'
import Navbar from '../Navbar'

const AdminScheduleTrainings = () => {

   const navigate=useNavigate();
    
    const [trainingSchedules, setTrainingSchedules] = useState([])

    const GotoNext = () =>{
        navigate("/admin/schedules");
    }

    useEffect(() => {
        TrainingSchuduleService.getAllTrainingSchudule().then((response)=>{
            setTrainingSchedules(response.data)
            console.log(response.data);
         }).catch(error =>{
            console.log(error);
         })
      
    }, [])

    const deleteTrainingSchudule=(id) => {
        TrainingSchuduleService.deleteTrainingSchudule(id).then((Response) => {
          console.log(Response.data)
          alert("Schedule deleted");
          navigate("/admin/schedules");
  
        }).catch(error =>{
            console.log(error);
        })
    }

    // const saveOrUpdateTrainingSchedule=(e)=>{
    //     e.preventDefault();
    //     const trainingSchudule ={id,timings,startDate,endDate,courseId,trainerId}
    //     console.log(trainingSchudule)
    //     if(id){
    //         TrainingSchuduleService.updateTrainingSchudule(id, trainingSchudule).then((Response) =>{
    //             console.log(Response.data)
    //             GotoNext();
    //         }).catch(error =>{
    //             console.log(error)
    //         })

    //     }else{
    //         TrainingSchuduleService.createTrainingSchudule(trainingSchudule).then((Response) => {
    //             console.log(Response.data)
    //             alert("Training scheduled successfully");
    //             GotoNext();
                 
    //          }).catch(error =>{
    //              console.log(error)
    //          })
    //     }   
    // }

  return (
    
    <div className='container'>
        <Navbar/>
        {/* <StudentNavbar/><br></br><br></br><br></br><br></br><br></br> */}
        <br></br> <br></br> <br></br>
        <h2 className='text-center'>Training Schedules</h2>
        {/* <Link to="/addPayment" className='btn btn-primary mb-2'>Add Payment</Link> */}
        <Link to = "/admin/addSchedule" className="btn btn-primary">Schedule a Training</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Course Name</th>
                <th>Trainer Name</th>
                <th>Amount </th>
                <th>Start date</th>
                <th>End date</th>
                <th>Timings</th>
                <th></th>
            </thead>

            <tbody>
                {
                    trainingSchedules.map(
                        schedule=>
                          <tr key={schedule.id}>
                            {/* <td>{schedule.id}</td> */}
                             <td>{schedule.course.courseName}</td>
                             <td>{schedule.trainer.firstName}</td>
                             <td>{schedule.course.courseAmount}</td>
                             <td>{schedule.startDate}</td>
                             <td>{schedule.endDate}</td>
                             <td>{schedule.timings}</td>
                             <td><button className='btn btn-danger' onClick={( ) => deleteTrainingSchudule(schedule.id)}> Delete </button>
                             <Link className='btn btn-info' to= {`/admin/update-training/${schedule.id}`} > Update </Link></td>
                          </tr>
                    
                        
                    )
                }
            </tbody>

        </table>
        
    </div>
  )
}

export default AdminScheduleTrainings