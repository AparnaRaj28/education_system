import React from 'react'
import ListOfStudents from '../../StudentComponents/ListOfStudents'
import AdminFooter from '../AdminFooter'
import Navbar from '../Navbar'

function AdminStudent() {
  return (
    <div>
        <Navbar/>
        <ListOfStudents/>
        <AdminFooter/>
    </div>
  )
}

export default AdminStudent