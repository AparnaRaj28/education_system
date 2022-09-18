import React from 'react'
import StudentDashboard from './StudentDashboard'
import StudentNavbar from './StudentNavbar'
import StudentSidebar from './StudentSidebar'
import {useParams} from 'react-router-dom'
import StudentFooter from './StudentFooter'

function StudentHome() {

  const {id} = useParams();
  console.log(id)
  return (
    <div>
   
                 <div>
                <StudentNavbar/>
                 <br></br>
                  <StudentDashboard data={id}/>
                  <StudentFooter/>
                
             </div>
            </div>  

  )
}

export default StudentHome