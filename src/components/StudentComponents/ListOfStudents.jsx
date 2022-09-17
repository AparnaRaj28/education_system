import React,{useState , useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import StudentService from '../../services/StudentService'

const ListOfStudents = () => {
    const [students, setstudents] = useState([])
    const navigate=useNavigate();

    useEffect(() => {
        StudentService.getAllStudent().then((Response) =>{
            setstudents(Response.data)
            console.log(Response.data);
        }).catch(error =>{
            console.log(error);
        })
      
    }, [])

    const deleteStudent =(studentId) =>{
        StudentService.deleteStudent(studentId).then((respond) => {
            alert("User deleted");
            navigate("/admin/student")

        }).catch(error =>{
            console.log(error);
        })

    }
    
  return (
    <div className='container'>
   
    {/* <Link to = "/addstudent" className="btn btn-primary">Add Student</Link> */}
    <br/><br/>
        <h2 className='text-center'>List of Students</h2>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Roll No</th>
                <th>Full name</th>
                {/* <th>FirstName</th>
                <th>LastName</th> */}
                <th>Mobile</th>
                <th>Email Id</th>
                <th>Action</th>
                {/* <th>Progress Id</th>
                <th>Payment Id</th>
                <th>Schudule Id</th> */} 
            </thead>
            <tbody>
                {
                    students.map(
                        student =>
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            {/* <td>{student.firstName}</td> */}
                            <td>{student.firstName} {student.lastName}</td>
                            <td>{student.mobile}</td>
                            <td>{student.email}</td>

                            {/* <td><Link to = "/getTrainingSchudule" className="btn btn-primary">Training Schudule</Link></td> */}
                            <td>
                            {/* <Link className='btn btn-info' to={`/editstudent/${student.id}`}>Update</Link>
                            <Link to="getTrainingSchudule" className="btn btn-primary">Training Schudule</Link> */}
                            <button className='btn btn-danger' onClick={( ) => deleteStudent(student.id)}>delete</button>
                            </td>
                            
                            {/* <td>{student.progressId}</td>
                            <td>{student.paymentId}</td>
                            <td>{student.schudle}</td> */}
                        </tr>
                    )
                    
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default ListOfStudents