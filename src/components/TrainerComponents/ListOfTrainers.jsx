import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import TrainerService from '../../services/TrainerService'
import Navbar from '../AdminComponent/Navbar';

 const ListOfTrainers = () => {
    let navigate= useNavigate();
       const GotoNext = () =>{
            navigate("/trainers");
        }
    

    const[trainer, setTrainer] = useState([])
    useEffect(() => {
        TrainerService.getAllTrainers().then((Response) => {
            setTrainer(Response.data)
            console.log(Response.data)
        }).catch(error =>{
            console.log(error);
        })
    }, [])

    const deleteTrainer =(id) =>{
        TrainerService.deleteTRainer(id).then((Response) =>{
            console.log(Response.data)
            
        }).catch(error =>{
            console.log(error)
            alert("Cannot delete a trainer already scheduled")
        })
        navigate("/admin/trainers");
    }

  return (

    <div className="container">
       <h3 className='text-center'> <ins>LIST OF TRAINERS </ins></h3>
       <Link to = "/addTrainer" className='btn btn-primary'>Add Trainer</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th> Serial No </th>
                {/* <th> First Name </th>
                <th> Last Name </th> */}
                <th>Name</th>
                <th> Email Id </th>
                <th> Mobile </th>
                {/* <th> Course </th> */}
                <th colSpan={2}><center> Actions </center> </th>
            </thead>
            <tbody>
                {
                    trainer.map(
                        trainer =>
                        <tr key= {trainer.id}>
                            <td> {trainer.id} </td>
                            <td>{trainer.firstName} {trainer.lastName}</td>
                            {/* <td> {trainer.firstName} </td>
                            <td> {trainer.lastName} </td> */}
                            <td> {trainer.email} </td>
                            <td> {trainer.mobile} </td>
                            {/* <td> {trainer.course.courseName} </td> */}
                            <td>
                                <Link className='btn btn-info' to= {`/update-trainer/${trainer.id}`} > Update </Link>
                            
                            <button className='btn btn-danger' onClick={( ) => deleteTrainer(trainer.id)}> Delete </button></td>

                        </tr>
                    )
                }
            </tbody>

        </table>


    </div>
  )
}
export default ListOfTrainers;