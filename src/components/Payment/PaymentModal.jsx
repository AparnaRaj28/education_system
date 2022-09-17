import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import './PaymentModal.css'

function PaymentModal({closeModal}) {

  const navigate=useNavigate();
  function handleContinue()
{
   navigate("/addpayment");
}
  return (
    <div className="modalBackground">
    <div className="modalContainer">
      <div className="titleCloseBtn">
        <button
          onClick={() => {
            closeModal(false);
          }}
        >
          X
        </button>
      </div>
      <div className="title">
        <h3 style={{ color: "black" }}>Are You Sure You Want to Continue?</h3>
      </div>
      <div className="body">
        <p> details of payment</p>
      </div>
      <div className="footer">
        <button
          onClick={() => {
            closeModal(false);
          }}
          id="cancelBtn"
        >
          Cancel
        </button>
        <button onClick={handleContinue}>Continue</button>
      </div>
    </div>
  </div>
  )
}

export default PaymentModal