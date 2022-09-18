import React from 'react';
import AdminFooter from '../AdminFooter';
import Navbar from '../Navbar';


function AdminHome() {
  return (
      <>
      <Navbar/>
         <h2 align="center">Admin Dashboard</h2>
         <AdminFooter/>
      </>
  );
}

export default AdminHome;