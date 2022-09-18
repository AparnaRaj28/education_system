import React from 'react'
import AddTraining from '../../TrainingScheduleComponents/AddTraining'
import AdminFooter from '../AdminFooter'
import Navbar from '../Navbar'

function AdminAddSchedule() {
  return (
    <div>
        <Navbar/>
        <AddTraining/>
        <AdminFooter/>
    </div>
  )
}

export default AdminAddSchedule