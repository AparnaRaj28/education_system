import React , {useEffect,useState}from 'react'
import {useParams,Link,useNavigate } from 'react-router-dom';
import CourseService from '../../services/CourseService';
import Navbar from '../AdminComponent/Navbar';

const AddCourse = () => {
    const [courseName, setCourseName] = useState('');
    const [courseAmount, setCourseAmount] = useState('')
    const {id} = useParams();
    
    let navigate = useNavigate();
    const GotoNext = () =>{
        navigate("/admin/courses");
    }


  
    const saveOrUpdateCourse =(e)=>{
        e.preventDefault();
        
        const Course ={id,courseName,courseAmount}
        if(id){
            CourseService.updateCourse(id, Course).then((Response) =>{
                console.log(Response.data)
                alert("Course is updated");
                GotoNext();
            }).catch(error =>{
                console.log(error)
            })
        }
        else{
        CourseService.createCourse(Course).then((Response) => {
           console.log(Response.data)
           alert("New course added")
           GotoNext();


        }).catch(error =>{
            console.log(error.response.data)
        })
    }
    }
//*******************Getting course by id*************************** */
    useEffect(() =>{
        CourseService.getCourseById(id).then((Response) =>{
            setCourseName(Response.data.courseName)
            setCourseAmount(Response.data.courseAmount)
        
        }).catch(error =>{
            console.log(error)
        })
    }, [])
//************************************************************************ */
    const title = () =>{
        if(id){
            return <h3 className='text-center'> Update Student </h3>
        }
        else{
            return <h3 className='text-center'> Add Student </h3>
        }
    }
    
  return (
    <div>
        <Navbar/>
    <br /><br />
    <div className='container'>
    <div >
    <div className='card col-md-6 offset-md-3 offset-md-3'>
            {
                title()
            }
    <div className='card-body'>
        <form>
            <div className='form-group mb-2'>
                <label className='form-label'>Course :</label>
                <input
                        type= "text" placeholder='Enter course' name='firstName' value={courseName} className="form-control"
                        onChange= {(e) =>setCourseName(e.target.value)} 
                        required/>    
                {/* <input type={'text'} placeholder="enter course" name='course' className='form-control' value={courseName} onChange ={(e) => setCourseName(e.target.value)} /> */}
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