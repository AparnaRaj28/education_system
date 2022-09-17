import React , {useEffect,useState}from 'react'
import {useParams,Link,useNavigate } from 'react-router-dom';
import ProgressService from '../../services/ProgressService';
import Navbar from '../AdminComponent/Navbar';



const AddProgress = () => {
  
    const[studentName,setStudentName] = useState('')
    const [comments, setComments] = useState('')
    const [scoredMarks, setScoredMarks] = useState('')
    const {id} = useParams();
    
    let navigate = useNavigate();
    const GotoNext = () =>{
        navigate("/admin/progress");
    }

    const saveOrUpdateProgress =(e)=>{
        e.preventDefault();
        const progress ={id,comments,scoredMarks}
        if(id){
            ProgressService.updateProgress(id, progress).then((Response) =>{
                console.log(Response.data)
                GotoNext();
            }).catch(error =>{
                console.log(error)
            })
        }
        else{
            ProgressService.createProgress(progress).then((Response) => {
                console.log(Response.data)
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
            setStudentName(Response.data.studentName)
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
                <label className='form-label'>Student Name</label>
                {/* <select className='form-control'>
                    <option>
                         
                    </option>
                </select> */}
                <input type="text" placeholder="Enter student name" name='studentName' className='form-control' 
                value={studentName} onChange ={(e) => setStudentName(e.target.value)} required/>
            </div>
            <div className='form-group mb-2'>
                <label className='form-label'>Comments :</label>
                <input type={'text'} placeholder="enter comments" name='comments' className='form-control' 
                value={comments} onChange ={(e) => setComments(e.target.value)} required/>
            </div>

            <div className='form-group mb-2'>
                <label className='form-label'>Scored Marks :</label>
                <input type={'text'} placeholder="enter scored marks" name='scoredMarks' className='form-control' 
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