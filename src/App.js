import './App.css';
import GetPayment from './components/GetPayment';
import AddPayment from './components/AddPayment';
import GetTrainingSchedules from './components/GetTrainingSchedules';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './components/HomePage/Home';
import Login from './components/Form/Login';
import Register from './components/Form/Register';
import StudentHome from './components/Student/StudentHome';




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
            
          </Routes>
     
      </div>
      </Router>
    </>
  );
}

export default App;
