import React,{useState} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import PaymentService from '../../services/PaymentService'
import StudentNavbar from '../Student/StudentNavbar'




const AddPayment = () => {
    
    const {student_id,courseId} = useParams();
    console.log(student_id)
    console.log(courseId)

 
    const [amountPaid, setAmountpaid] = useState('')
    const [description, setDecription] = useState('')
    const [paymentDate, setPaymentDate] = useState('')
    const navigate=useNavigate();

    const savePayment=(e)=>{
        e.preventDefault();

        const payment={amountPaid,description,paymentDate,courseId,student_id}
        console.log(payment);
        PaymentService.AddPayment(payment).then((response)=>{
            console.log(response.data)
            alert("Payment completed")
        //    navigate('/student/payments')
        navigate(`/student/${student_id}`)

        }).catch(error=>{
            console.log(error)
        })
    }

  return (
    <div>
      <StudentNavbar/><br></br><br></br><br></br>
      <br></br><br></br><br></br>
      
      <div className='container'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h3 className='text-center'>Add Payment Details</h3>
             <div className='card-body'>
                  <form>
                     <label>Course Id: {courseId}</label><br></br>
                     <label>Student RollNo : {student_id}</label>
                    <div className='form-group mb-2'>
                        <label className='form-label'>Amount</label>
                        <input 
                            type="number" 
                            placeholder='Enter the amount'
                            name='amount'
                            className='form-control'
                            value={amountPaid}
                            onChange = {(e)=>setAmountpaid(e.target.value)}
                        ></input>
                    </div>

                    <div className='form-group mb-2'>
                        <label className='form-label'>Description</label>
                        <input 
                            type="text" 
                            placeholder='Enter description'
                            name='description'
                            className='form-control'
                            value={description}
                            onChange = {(e)=>setDecription(e.target.value)}
                        ></input>
                    </div>

                    <div className='form-group mb-2'>
                        <label className='form-label'>Payment Date</label>
                        <input 
                            type="date" 
                            placeholder='Enter date of payment'
                            name='payment'
                            className='form-control'
                            value={paymentDate}
                            onChange = {(e)=>setPaymentDate(e.target.value)}
                        ></input>
                    </div>


                    <button className='btn btn-success'
                            onClick={(e)=>savePayment(e)}
                     >
                      Add Payment
                     </button>
                  </form>
             </div>
        </div>

      </div>
   
    </div>
  )
}

export default AddPayment