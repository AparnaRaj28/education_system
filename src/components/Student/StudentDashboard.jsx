import React from 'react'


function StudentDashboard() {


         

  return (
    <div>
     <div class="col main pt-5 mt-3">
         
         <nav aria-label="breadcrumb">
         {/* <ol class="breadcrumb">
             <li class="breadcrumb-item"><a href="#">Home</a></li>
             <li class="breadcrumb-item"><a href="#">Library</a></li>
             <li class="breadcrumb-item active" aria-current="page">Data</li>
         </ol> */}
         </nav>
         {/* <p class="lead d-none d-sm-block">Add Employee Details and Records</p> */}
        <br></br>
         <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                 <span aria-hidden="true">×</span>
                 <span class="sr-only">Close</span>
             </button>
             <strong>Data and Records</strong> Learn more about employee
         </div>
         <div class="row mb-3">
             <div class="col-xl-3 col-sm-6 py-2">
                 <div class="card bg-success text-white h-100">
                     <div class="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                         <div class="rotate">
                             <i class="fa fa-user fa-4x"></i>
                         </div>
                         <h6 class="text-uppercase">Profile</h6>
                         {/* <h1 class="display-4">134</h1> */}
                     </div>
                 </div>
             </div>
             <div class="col-xl-3 col-sm-6 py-2">
                 <div class="card text-white bg-danger h-100">
                     <div class="card-body bg-danger">
                         <div class="rotate">
                         <i class="fa-sharp fa-solid fa-chalkboard-user"></i>
                         </div>
                         <h6 class="text-uppercase">Trainings</h6>
                         {/* <h1 class="display-4">87</h1> */}
                     </div>
                 </div>
             </div>
             <div class="col-xl-3 col-sm-6 py-2">
                 <div class="card text-white bg-info h-100">
                     <div class="card-body bg-info">
                         <div class="rotate">
                         <i class="fa-regular fa-credit-card"></i>
                         </div>
                         <h6 class="text-uppercase">Payment History</h6>
                         {/* <h1 class="display-4">125</h1> */}
                     </div>
                 </div>
             </div>
             <div class="col-xl-3 col-sm-6 py-2">
                 <div class="card text-white bg-warning h-100">
                     <div class="card-body">
                         <div class="rotate">
                         <i class="fa-solid fa-file"></i>
                         </div>
                         <h6 class="text-uppercase">Courses</h6>
                         {/* <h1 class="display-4">36</h1> */}
                     </div>
                 </div>
             </div>
         </div>
  
         <hr/>
    
        
  
     </div>
    </div>
  )
}

export default StudentDashboard