import React , {useState}from 'react'
import {useNavigate,Link } from 'react-router-dom';
import CourseService from '../../services/CourseService';
import Navbar from '../AdminComponent/Navbar';

const AddCourse = () => {
    const [courseName, setCourseName] = useState('');
    const [courseAmount, setCourseAmount] = useState('')
    
    
    const navigate = useNavigate();

    const saveOrUpdateCourse =(e)=>{
        e.preventDefault();
        const Course ={courseName,courseAmount}
        
        CourseService.createCourse(Course).then((Response) => {
           console.log(Response.data)
            navigate('/admin/courses');


        }).catch(error =>{
            console.log(error.response.data)
        })
    }
    
  return (
    <div>
        <Navbar/>
    <br /><br />
    <div className='container'>
    <div >
    <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h1>Add Course</h1>
    <div className='card-body'>
        <form>
            <div className='form-group mb-2'>
                <label className='form-label'>Course :</label>
                <input type={'text'} placeholder="enter course" name='course' className='form-control' value={courseName} onChange ={(e) => setCourseName(e.target.value)} />
            </div>
            <div className='form-group mb-2'>
                <label className='form-label'>Amount :</label>
                <input type={'text'} placeholder="enter amount" name='amount' className='form-control' value={courseAmount} onChange ={(e) => setCourseAmount(e.target.value)} />
            </div>
                   
            <button className='btn btn-success' onClick={(e) =>  saveOrUpdateCourse(e)}> Submit</button>
            <Link to="/admin/courses" className='btn btn-danger'>Cancel</Link>
        </form>
    </div>    
    </div>    
    </div>
    </div>
    </div>
  )
}
  

export default AddCourse