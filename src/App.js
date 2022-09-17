import './App.css';


import GetTrainingSchedules from './components/GetTrainingSchedules';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './components/HomePage/Home';
import Login from './components/Form/Login';
import Register from './components/Form/Register';
import StudentHome from './components/Student/StudentHome';
import ListOfStudents from './components/StudentComponents/ListOfStudents';
import ListOfTrainers from './components/TrainerComponents/ListOfTrainers';
import AddTrainer from './components/TrainerComponents/AddTrainer';
import ListOfCourse from './components/CourseComponents/ListOfCourses';
import AddCourse from './components/CourseComponents/AddCourse';

import ListOfProgress from './components/ProgressComponents/ListOfProgress';
import AddProgress from './components/ProgressComponents/AddProgress';

import AdminStudent from './components/AdminComponent/pages/AdminStudent';
import AdminTrainer from './components/AdminComponent/pages/AdminTrainer';
import AdminProgress from './components/AdminComponent/pages/AdminProgress';
import AdminCourses from './components/AdminComponent/pages/AdminCourses';
import AdminHome from './components/AdminComponent/pages/AdminHome';
import AdminPayments from './components/AdminComponent/pages/AdminPayments';
import GetPayment from './components/Payment/GetPayment';
import AddPayment from './components/Payment/AddPayment';
import AdminAddProgress from './components/AdminComponent/pages/AdminAddProgress';
import AdminScheduleTrainings from './components/AdminComponent/pages/AdminScheduleTrainings';
import StudentTrainingSchedules from './components/Student/Pages/StudentTrainingSchedules';
import AdminAddSchedule from './components/AdminComponent/pages/AdminAddSchedule';





function App() {
  return (
    <>
      
      <Router>
        <div className='container'>
        
          <Routes>

            <Route path='/getallpayments' element={<GetPayment/>}></Route>
            <Route path='/addpayment' element={<AddPayment/>}></Route>


            <Route path='/' element={<Home/>}></Route>
            <Route path='/sign-in' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/trainingSchedules' element={<GetTrainingSchedules/>}></Route>
            <Route path='/student' element={<StudentHome/>}></Route>
            <Route path= "/students" element = {<ListOfStudents/>}></Route>

          
            <Route path= "/trainers" element = {<ListOfTrainers/>}></Route>
            <Route path= "/addTrainer" element={<AddTrainer/>}></Route>
            <Route path="/update-trainer/:id" element={<AddTrainer/>}></Route>


            <Route path='/courses' element = {<ListOfCourse/>}></Route>
            <Route path='/addCourse' element ={<AddCourse/>}></Route>


            <Route path="/progress" element ={<ListOfProgress/>}></Route>
            <Route path="/addProgress" element ={<AddProgress/>}></Route>
            <Route path="/update-progress/:id" element ={<AddProgress/>}></Route>


            {/* <Route path='/trainings' element ={<ListOfTrainings/>}></Route>
          <Route path='/addTrainingSchudule' element ={<AddTraining/>}></Route>
          <Route path="/update-training/:id" element ={<AddTraining/>}></Route> */}

          {/* <Route path='/addTrainingSchudule' element ={<AddTraining/>}></Route>
          <Route path="/update-training/:id" element ={<AddTraining/>}></Route> */}
            {/* <Route exact path='/students' element ={<GetStudentComponent />}/> */}
        {/* <Route exact path='/addstudent' element ={<AddStudentComponent />}/> */}
          {/* <Route path="/addStudent" element ={<AddStudent/>}></Route>
          <Route path="/update-student/:id" element ={<AddStudent/>}></Route> */}
   
         
        {/* Admin */}

         <Route path="/admin" element ={<AdminHome/>}></Route> 
         <Route path="/admin/student" element ={<AdminStudent/>}></Route> 
         <Route path="/admin/trainers" element ={<AdminTrainer/>}></Route> 
         <Route path="/admin/Progress" element ={<AdminProgress/>}></Route> 
         <Route path="/admin/courses" element ={<AdminCourses/>}></Route> 
         <Route path="/admin/payments" element ={<AdminPayments/>}></Route> 

         <Route path="/admin/schedules" element ={<AdminScheduleTrainings/>}></Route> 
         <Route path="/admin/addSchedule" element ={<AdminAddSchedule/>}></Route> 
         <Route path="/admin/update-training/:id" element ={<AdminAddSchedule/>}></Route>
         {/* <Route path="/admin/addProgress" element ={<AdminAddProgress/>}></Route>  */}


         {/* Student */}
         <Route path="/student/schedules" element ={<StudentTrainingSchedules/>}></Route> 

  
          </Routes>
     
      </div>
      </Router>
    </>
  );
}

export default App;
