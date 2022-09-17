import React,{useEffect, useState} from 'react'
import {Link,useParams,useNavigate } from 'react-router-dom';
import CourseService from '../../services/CourseService';
import TrainerService from '../../services/TrainerService';
import TrainingSchuduleService from '../../services/TrainingSchuduleService';


const AddTraining = () => {
    const [timings, settimings] = useState('')
    const [startDate, setstartDate] = useState('')
    const [endDate, setendDate] = useState('')
    const [courseId, setCourseId] = useState('')
    const [trainerId, setTrainerId] = useState('')
    const {id} = useParams();
    
    let navigate = useNavigate();
    const GotoNext = () =>{
        navigate("/admin/schedules");
    }

    const saveOrUpdateTrainingSchedule=(e)=>{
        e.preventDefault();
        const trainingSchudule ={id,timings,startDate,endDate,courseId,trainerId}
        const traininScheduleupdate={id,timings,startDate,endDate}
        console.log(trainingSchudule)
        if(id){
            TrainingSchuduleService.updateTrainingSchudule(id, trainingSchudule).then((Response) =>{
                console.log(Response.data)
                GotoNext();
            }).catch(error =>{
                console.log(error)
            })

        }else{
            TrainingSchuduleService.createTrainingSchudule(traininScheduleupdate).then((Response) => {
                console.log(Response.data)
                alert("Training scheduled successfully");
                GotoNext();
                 
             }).catch(error =>{
                 console.log(error)
             })
        }   
    }
    useEffect(() =>{
        TrainingSchuduleService.getTrainingSchuduleById(id).then((Response) =>{
            settimings(Response.data.timings)
            setendDate(Response.data.endDate)
            setstartDate(Response.data.startDate)
        }).catch(error =>{
            console.log(error)
        })
        }, [])
        const title = () =>{
            if(id){
                return <h3 className='text-center'> Update Training Schedule </h3>
            }
            else{
                return <h3 className='text-center'> Add Training Schedule </h3>
            }
        }

        //**************************Course details************************* */
        const [courses, setcourses] = useState([])
        useEffect(() => {
            CourseService.getAllCourse().then((Response) => {
                setcourses(Response.data)
                console.log(Response.data);
            }).catch(error =>{
                console.log(error);
            })
          
        }, [])
        //*************************************************************** */

        //**************************Trainer details************************ */
        const[trainers, setTrainer] = useState([])
        useEffect(() => {
            TrainerService.getAllTrainers().then((Response) => {
                setTrainer(Response.data)
                console.log(Response.data)
            }).catch(error =>{
                console.log(error);
            })
        }, [])

        //****************************************************************** */
    
  return (
    <div>
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
                <label className='form-label'>Select Course</label>
                {/* <input type={'text'} placeholder="Enter course" name='course' className='form-control' 
                 required/> */}
                 <select className='form-control' onChange ={(e) => setCourseId(e.target.value)} value={courseId} required >
                    <option>-SELECT-</option>
                    {                    
                        courses.map(
                            course=>
                            <option value={course.id}>

                                 {course.courseName}--({course.id})
                                 
                            </option>
                        )

                    }
                 </select>
            </div>

            <div className='form-group mb-2'>
                <label className='form-label'>Select Trainer</label>
                {/* <input type={'text'} placeholder="Enter course" name='course' className='form-control' 
                 required/> */}
                 <select className='form-control' onChange ={(e) => setTrainerId(e.target.value)} value={trainerId} required>
                    <option>-SELECT-</option>
                    {                    
                        trainers.map(
                            trainer=>
                            <option value={trainer.id}>

                                 {trainer.firstName} {trainer.lastName}--({trainer.id})
                                 
                            </option>
                        )

                    }
                 </select>
            </div>
            <div className='form-group mb-2'>
                <label className='form-label'>Timings :</label>
                <input type={'text'} placeholder="enter timings" name='timings' className='form-control' 
                value={timings} onChange ={(e) => settimings(e.target.value)} required/>
            </div>

            <div className='form-group mb-2'>
                <label className='form-label'>Start Date :</label>
                <input type={'date'} placeholder="enter startDate" name='startDate' className='form-control' 
                value={startDate} onChange ={(e) => setstartDate(e.target.value)} required/>
            </div>

            <div className='form-group mb-2'>
                <label className='form-label'>End Date :</label>
                <input type={'date'} placeholder="enter endDate" name='endDate' className='form-control' 
                value={endDate} onChange ={(e) => setendDate(e.target.value)} required/>
            </div>

            {/* <div className='form-group mb-2'>
                <label className='form-label'>course:</label>
                <input type={'email'} placeholder="enter course" name='course' className='form-control' value={course} onChange ={(e) => setcourse(e.target.value)} />
            </div>  
            <div className='form-group mb-2'>
                <label className='form-label'>trainer:</label>
                <input type={'email'} placeholder="enter trainer" name='trainer' className='form-control' value={trainer} onChange ={(e) => setTrainer(e.target.value)} />
            </div>   */}

            <button className='btn btn-success' onClick={(e) =>  saveOrUpdateTrainingSchedule(e)}> Submit</button>{" "}
            <Link to="/admin/schedules" className='btn btn-danger'>Cancel</Link>

        </form>
    </div>    
    </div>    
    </div>
    </div>
    </div>
  )
}

export default AddTraining;