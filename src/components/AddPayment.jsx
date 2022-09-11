import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import PaymentService from '../services/PaymentService'


const AddPayment = () => {
  
    const [amountpaid, setAmountpaid] = useState('')
    const [decription, setDecription] = useState('')
    const [paymentDate, setPaymentDate] = useState('')
    const navigate=useNavigate();

    const savePayment=(e)=>{
        e.preventDefault();

        const payment={amountpaid,decription,paymentDate}
        console.log(payment);
        PaymentService.AddPayment(payment).then((response)=>{
            console.log(response.data)
           navigate('/getallpayments')

        }).catch(error=>{
            console.log(error)
        })
    }

  return (
    <div>
      
      <div className='container'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h3 className='text-center'>Add Payment Details</h3>
             <div className='card-body'>
                  <form>
                    <div className='form-group mb-2'>
                        <label className='form-label'>Amount Paid</label>
                        <input 
                            type="number" 
                            placeholder='Enter the amount'
                            name='amount'
                            className='form-control'
                            value={amountpaid}
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
                            value={decription}
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