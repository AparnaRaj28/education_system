import React,{useState,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'
import StudentService from '../../../services/StudentService';
import StudentFooter from '../StudentFooter';
import StudentNavbar from '../StudentNavbar';

function StudentProfile(){

    const {id} = useParams();
    console.log(id)

    //**********************Student detials by id************************** */
    const [student, setstudents] = useState([])
    useEffect(() => {
        StudentService.getStudentById(id).then((Response) => {
            setstudents(Response.data)
          console.log(Response.data)
        }).catch(error =>{
          console.log(error);
      })
      }, [])
    //*************************************************************** */

  return (
    <div>
        <StudentNavbar/>
        <br></br>  <br></br>  <br></br>  <br></br>
        <h2 className='text-center'>Your Details</h2>
        <br></br>  <br></br> 
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Roll No</th>
                <th>Full name</th>
               
                <th>Mobile</th>
                <th>Email Id</th>
            
            </thead>
            <tbody>
                {
                    
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            {/* <td>{student.firstName}</td> */}
                            <td>{student.firstName} {student.lastName}</td>
                            <td>{student.mobile}</td>
                            <td>{student.email}</td>

                            {/* <td><Link to = "/getTrainingSchudule" className="btn btn-primary">Training Schudule</Link></td> */}
                            {/* <td> */}
                            {/* <Link className='btn btn-info' to={`/editstudent/${student.id}`}>Update</Link>
                            <Link to="getTrainingSchudule" className="btn btn-primary">Training Schudule</Link> */}
                            {/* <button className='btn btn-danger' onClick={( ) => deleteStudent(student.id)}>delete</button> */}
                            {/* </td> */}
                            
                            {/* <td>{student.progressId}</td>
                            <td>{student.paymentId}</td>
                            <td>{student.schudle}</td> */}
                        </tr>
                        
                    
                }
                
            </tbody>
        </table>
        <Link className='btn btn-info' to={`/student/${id}`}>Go back</Link>
        <StudentFooter/>
    </div>
    
  )
}

export default StudentProfile