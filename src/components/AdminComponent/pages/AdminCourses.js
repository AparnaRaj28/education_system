import React from 'react'
import ListOfCourse from '../../CourseComponents/ListOfCourses'
import AdminFooter from '../AdminFooter'
import Navbar from '../Navbar'

function AdminCourses() {
  return (
    <div>
        <Navbar/>
        <ListOfCourse/>
        <AdminFooter/>
    </div>
  )
}

export default AdminCourses