import React from 'react'
import ListOfProgress from '../../ProgressComponents/ListOfProgress'
import AdminFooter from '../AdminFooter'
import Navbar from '../Navbar'

function AdminProgress() {
  return (
    <div>
        <Navbar/>
        <ListOfProgress/>
        <AdminFooter/>
    </div>
  )
}

export default AdminProgress