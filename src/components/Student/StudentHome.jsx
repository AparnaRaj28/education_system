import React from 'react'
import StudentDashboard from './StudentDashboard'
import StudentNavbar from './StudentNavbar'
import StudentSidebar from './StudentSidebar'

function StudentHome() {
  return (
    <div>
                 <div>
                <StudentNavbar/>
                 <br></br>
                  <StudentDashboard/>
                
             </div>
            </div>  

  )
}

export default StudentHome