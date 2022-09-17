import React, { useState,useEffect } from 'react'
import TrainingSchuduleService from '../services/TrainingSchuduleService'
import {Link} from 'react-router-dom'

import PaymentModal from './Payment/PaymentModal'

const GetTrainingSchedules = () => {

    const[openModal,setopenModal]=useState(false);
    const [trainingSchedules, setTrainingSchedules] = useState([])

    useEffect(() => {
        TrainingSchuduleService.getAllTrainingSchudule().then((response)=>{
            setTrainingSchedules(response.data)
            console.log(response.data);
         }).catch(error =>{
            console.log(error);
         })
      
    }, [])
    

  return (
    
    <div className='container'>
        {/* <StudentNavbar/><br></br><br></br><br></br><br></br><br></br> */}
        <br></br> <br></br> <br></br>
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
                             <td><button onClick={()=>{
                                setopenModal(true);
                             }}>
                             Enroll</button>
                             
                             </td>
                             
                          </tr>
                    
                        
                    )
                }
            </tbody>

        </table>
        { openModal && <PaymentModal closeModal={setopenModal}/>}
    </div>
  )
}

export default GetTrainingSchedules