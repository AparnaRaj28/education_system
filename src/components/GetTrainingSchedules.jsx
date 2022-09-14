import React, { useState,useEffect } from 'react'
import TrainingScheduleService from '../services/TrainingScheduleService'
import {Link} from 'react-router-dom'

const GetPayment = () => {

    const [trainingSchedules, setTrainingSchedules] = useState([])

    useEffect(() => {
        TrainingScheduleService.getAllTrainingSchedules().then((response)=>{
            setTrainingSchedules(response.data)
            console.log(response.data);
         }).catch(error =>{
            console.log(error);
         })
      
    }, [])
    

  return (
    <div className='container'>
        <h2 className='text-center'>Training Schedules</h2>
        {/* <Link to="/addPayment" className='btn btn-primary mb-2'>Add Payment</Link> */}
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
                             <td><Link to ="/enroll" className='btn btn-primary mb-2'>Enroll</Link></td>

                          </tr>
                    
                        
                    )
                }
            </tbody>

        </table>

    </div>
  )
}

export default GetPayment