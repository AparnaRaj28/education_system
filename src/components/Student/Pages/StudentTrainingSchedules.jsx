import React from 'react'
import GetTrainingSchedules from '../../GetTrainingSchedules'
import GetPayment from '../../GetTrainingSchedules'
import StudentNavbar from '../StudentNavbar'

function StudentTrainingSchedules() {
  return (
    <div>
        <StudentNavbar/>
        <GetTrainingSchedules/>
    </div>
  )
}

export default StudentTrainingSchedules