import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import TrainingSchuduleService from '../services/TrainingSchuduleService'

const ListOfTrainings = () => {

    const [trainingSchudules, settrainingSchudules] = useState([])
   
    useEffect(() => {
      TrainingSchuduleService.getAllTrainingSchudule().then((Response) => {
        settrainingSchudules(Response.data)
        console.log(Response.data)
      }).catch(error =>{
        console.log(error);
    })
    }, [])

    const deleteTrainingSchudule=(id) => {
      TrainingSchuduleService.deleteTrainingSchudule(id).then((Response) => {
        console.log(Response.data)

      }).catch(error =>{
          console.log(error);
      })
  }
    
  return (
    <div className='container'>
    
    <h2 className='text-center'><ins>Training Schudule</ins></h2>
    
    <Link to = "/addTrainingSchudule" className="btn btn-primary">Add Training Schudule</Link>
    
    
        <table className='table table-bordered table-striped'>
            <thead>
                {/* <th>TrainingSchudule Id</th> */}
                <th>Timings</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Course</th>
                <th>Trainer Name</th>
                <th colSpan={2}><center>Actions</center></th>	 
               
                
            </thead>
            <tbody>
                {
                    trainingSchudules.map(
                        trainingSchudule =>
                        <tr key={trainingSchudule.id}>
                            {/* <td>{trainingSchudule.id}</td> */}
                            <td>{trainingSchudule.timings}</td>
                            <td>{trainingSchudule.startDate}</td>
                            <td>{trainingSchudule.endDate}</td>
                            <td>{trainingSchudule.course}</td>
                            <td>{trainingSchudule.trainer}</td>
                            <td>
                            <Link className='btn btn-info' to= {`/update-training/${trainingSchudule.id}`} > Update </Link>
                            </td>
                            <td><button className='btn btn-danger' onClick={( ) => deleteTrainingSchudule(trainingSchudule.id)}> Delete </button></td>
                            
                        </tr>
                    )
                }
            </tbody>
        </table>
        

    </div>
  )
}
export default ListOfTrainings;