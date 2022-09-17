import React, { useState,useEffect } from 'react'
import PaymentService from '../../services/PaymentService'
import {Link} from 'react-router-dom'

const GetPayment = () => {

    const [payments, setPayments] = useState([])

    useEffect(() => {
         PaymentService.getAllPayments().then((response)=>{
            setPayments(response.data)
            console.log(response.data);
         }).catch(error =>{
            console.log(error);
         })
      
    }, [])
    

  return (
    <div className='container'>
        <h2 className='text-center'>List of payments</h2>
        {/* <Link to="/addPayment" className='btn btn-primary mb-2'>Add Payment</Link> */}
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Receipt No</th>
                <th>Description</th>
                <th>Amount </th>
                <th>Payment Date</th>
                <th>Student Name</th>
                <th>Student Serial No</th>
            </thead>

            <tbody>
                {
                    payments.map(
                        payment =>
                          <tr key={payment.id}>
                            <td>{payment.id}</td>
                             <td>{payment.description}</td>
                             <td>{payment.amountPaid}</td>
                             <td>{payment.paymentDate}</td>
                             <td>{payment.student.firstName}</td>
                             <td>{payment.student.id}</td>

                          </tr>
                    
                        
                    )
                }
            </tbody>

        </table>

    </div>
  )
}

export default GetPayment