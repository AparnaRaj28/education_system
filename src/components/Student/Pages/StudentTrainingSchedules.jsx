import React from 'react'
import GetTrainingSchedules from '../../GetTrainingSchedules'
import GetPayment from '../../GetTrainingSchedules'
import StudentFooter from '../StudentFooter'
import StudentNavbar from '../StudentNavbar'
import {useParams,Link} from 'react-router-dom'

function StudentTrainingSchedules() {
  const {id} = useParams();
  console.log(id)

  return (
    <div>
        <StudentNavbar/><br></br>
        <GetTrainingSchedules data={id}/>
        <StudentFooter/>
    </div>
  )
}

export default StudentTrainingSchedules