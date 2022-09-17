import React from 'react'
import ListOfStudents from '../../StudentComponents/ListOfStudents'
import Navbar from '../Navbar'

function AdminStudent() {
  return (
    <div>
        <Navbar/>
        <ListOfStudents/>
    </div>
  )
}

export default AdminStudent