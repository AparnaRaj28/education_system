import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function StudentFooter() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1', bottom:0,position:"fixed",width:"80%" }}>
      

      <div className='text-center text-dark p-3' style={{ backgroundColor: 'black' }}>
       <span style={{"color":"white"}}>© 2022 Copyright:</span> 
        {/* <a className='text-dark' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a> */}
      </div>
    </MDBFooter>
  );
}