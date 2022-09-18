import React , {useState,useEffect}from 'react'
import {Link} from 'react-router-dom'
import {useNavigate } from 'react-router-dom';
import CourseService from '../../services/CourseService'

const ListOfCourse = () => {
    const navigate = useNavigate();
    const [courses, setcourses] = useState([])
    useEffect(() => {
        CourseService.getAllCourse().then((Response) => {
            setcourses(Response.data)
            console.log(Response.data);
        }).catch(error =>{
            console.log(error);
        })
      
    }, [])
    
    const deleteCourse=(courseId) => {
        CourseService.deleteCourse(courseId).then((Response) => {
          alert("Course deleted");
          navigate("/admin/courses");
          
        }).catch(error =>{
            console.log(error);
            alert("Cannot delete course that is already been scheduled")
        })
    }

  return (
    <div className='container'>
    
    
    <br/><br/>
    <h2 className='text-center'>Courses</h2>
    <Link to = "/addCourse" className="btn btn-primary">Add Course</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Course No</th>
                <th>Course</th>
                <th> Amount</th>
                <th>Action</th>
               
                
            </thead>
            <tbody>
                {
                    courses.map(
                        course =>
                        <tr key={course.id}>
                            <td>{course.id}</td>
                            <td>{course.courseName}</td>
                            <td>{course.courseAmount}</td>
                            <Link className='btn btn-info' to= {`/admin/updateCourse/${course.id}`} > Update </Link>
                            <td><button className='btn btn-danger' onClick={( ) => deleteCourse(course.id)}>delete</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        

    </div>
  )
}

export default ListOfCourse