import React, { useState,useEffect } from 'react'
import PaymentService from '../../services/PaymentService'
import { useParams,Link } from 'react-router-dom';
import StudentNavbar from './StudentNavbar';
import StudentFooter from './StudentFooter';




const StudentGetPayment = () => {

    const {id} = useParams();
    console.log(id)

    const [payments, setPayments] = useState([])

    useEffect(() => {
         PaymentService.getPaymentById(id).then((response)=>{
            setPayments(response.data)
            console.log(response.data);
         }).catch(error =>{
            console.log(error);
         })
      
    }, [])
    

  return (
    
    <div className='container'>
        <StudentNavbar/>
        <br></br>
        <h2 className='text-center'>Your Payments</h2>    <br></br>
        {/* <Link to="/addPayment" className='btn btn-primary mb-2'>Add Payment</Link> */}
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Receipt No</th>
                <th>Description</th>
                <th>Amount Paid </th>
                <th>Payment Date</th>
                <th>Student Name</th>
                <th>Roll No</th>
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
                             <td>{payment.student.firstName} {payment.student.lastName}</td>
                             <td>{payment.student.id}</td>

                          </tr>
                    
                        
                    )
                }
            </tbody>

        </table>
        <Link className='btn btn-info' to={`/student/${id}`}>Go back</Link>
   <StudentFooter/>
    </div>
  )
}

export default StudentGetPayment