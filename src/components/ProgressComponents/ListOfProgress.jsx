import React , {useState,useEffect} from 'react'
import ProgressService from '../../services/ProgressService'
import { Link } from 'react-router-dom'

import StudentService from '../../services/StudentService'




const ListOfProgress = () => {
    const [progresss, setprogresss] = useState([])
    useEffect(() => {
        ProgressService.getAllProgress().then((Response) =>{
            setprogresss(Response.data)
            console.log(Response.data)
           
        }).catch(error =>{
            console.log(error);
        })
      
    }, [])

  return (
    <div className='container'>
    <h3 className='text-center'> STUDENT PROGRESS </h3>
    <Link to = "/addProgress" className='btn btn-primary'>Add Progress</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th> Serial No </th>
                <th> Student Roll No </th>
                <th> Student Name </th>
                <th> Comments </th>
                <th> Scored Marks </th>
                <th> Actions </th>
                
            </thead>
            <tbody>
                {
                    progresss.map(
                        progress =>
                        <tr key={progress.id}>
                            <td>{progress.id}</td>
                            <td>{progress.student.id}</td>
                            <td>{progress.student.firstName} {progress.student.lastName}</td>
                            {/*  */}
                            <td>{progress.comments}</td>
                            <td>{progress.scoredMarks}</td>
                            <td>
                                <Link className='btn btn-info' to= {`/update-progress/${progress.id}`} > Update </Link>
                            </td>
                            
                        </tr>
                    )
                }
            </tbody>
        </table>
       

    </div>
  )
}

export default ListOfProgress;