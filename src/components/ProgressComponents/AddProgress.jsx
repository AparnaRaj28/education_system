import React , {useEffect,useState}from 'react'
import {useParams,Link,useNavigate } from 'react-router-dom';
import ProgressService from '../../services/ProgressService';
import StudentService from '../../services/StudentService';
import Navbar from '../AdminComponent/Navbar';



const AddProgress = () => {
  
    const[studentId,setStudentId] = useState('')
    const [comments, setComments] = useState('')
    const [scoredMarks, setScoredMarks] = useState('')
    const {id} = useParams();
    
    let navigate = useNavigate();
    const GotoNext = () =>{
        navigate("/admin/progress");
    }

    const saveOrUpdateProgress =(e)=>{
        e.preventDefault();
        const progress ={id,comments,scoredMarks,studentId}
        const progressUpdate={id,comments,scoredMarks}
        console.log("Progress:"+progress)
        console.log("ProgressUpdate:"+progressUpdate)
        if(id){
            ProgressService.updateProgress(id, progress).then((Response) =>{
                console.log(Response.data)
                alert("Progress is updated");
                GotoNext();
            }).catch(error =>{
                console.log(error)
            })
        }
        else{
            ProgressService.createProgress(progress).then((Response) => {
                console.log(Response.data)
                alert("Progress successfully added")
                 GotoNext();
             }).catch(error =>{
                 console.log(error.response.data)
             })
        }          
    }
    useEffect(() =>{
        ProgressService.getProgressById(id).then((Response) =>{
            setScoredMarks(Response.data.scoredMarks)
            setComments(Response.data.comments)
            setStudentId(Response.data.studentId)
        }).catch(error =>{
            console.log(error)
        })
    }, [])
    const title = () =>{
        if(id){
            return <h3 className='text-center'> Update Progress </h3>
        }
        else{
            return <h3 className='text-center'> Add Progress </h3>
        }
    }
    //************************Student Details************************* */
    const [students, setstudents] = useState([])
    useEffect(() => {
        StudentService.getAllStudent().then((Response) =>{
            setstudents(Response.data)
            console.log(Response.data);
        }).catch(error =>{
            console.log(error);
        })
      
    }, [])
    //******************************************************************* */
    
  return (
    <div>
        <Navbar/>
    <br /><br />
    <div className='container'>
    <div >
    <div className='card col-md6 offset-md-3 offset-md-3'>
                   {
                    title()
                   }
    <div className='card-body'>
        <form>
           <div className='form-group mb-2'>
           <label className='form-label'>Select Student</label>

                 <select className='form-control' onChange ={(e) => setStudentId(e.target.value)} value={studentId} required >
                    <option>-SELECT-</option>
                    {                    
                        students.map(
                            student=>
                            <option value={student.id}>

                                 {student.firstName} {student.lastName}--({student.id})
                                 
                            </option>
                        )

                    }
                 </select>
            </div>
            <div className='form-group mb-2'>
                <label className='form-label'>Comments :</label>
                <input type={'text'} placeholder="enter comments" name='comments' className='form-control' 
                value={comments} onChange ={(e) => setComments(e.target.value)} required/>
            </div>

            <div className='form-group mb-2'>
                <label className='form-label'>Scored Marks :</label>
                <input type={'number'} placeholder="enter scored marks" name='scoredMarks' className='form-control' 
                value={scoredMarks} onChange ={(e) => setScoredMarks(e.target.value)} required/>
            </div>

                     
            <button className='btn btn-success' onClick={(e) =>  saveOrUpdateProgress(e)}> Submit </button>{" "}
            <Link to="/admin/progress" className='btn btn-danger'>Cancel</Link>

        </form>
    </div>    
    </div>    
    </div>
    </div>
    </div>
  )
    
 
}

export default AddProgress;