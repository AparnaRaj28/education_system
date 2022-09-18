import React from 'react'
import ListOfTrainers from '../../TrainerComponents/ListOfTrainers'
import AdminFooter from '../AdminFooter'
import Navbar from '../Navbar'

function AdminTrainer() {
  return (
    <div>
        <Navbar/>
        <ListOfTrainers/>
        <AdminFooter/>
    </div>
  )
}

export default AdminTrainer