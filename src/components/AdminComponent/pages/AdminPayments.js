import React from 'react'
import GetPayment from '../../Payment/GetPayment'
import AdminFooter from '../AdminFooter'
import Navbar from '../Navbar'

function AdminPayments() {
  return (
    <div>
        <Navbar/>
        <GetPayment/>
        <AdminFooter/>
    </div>
  )
}

export default AdminPayments