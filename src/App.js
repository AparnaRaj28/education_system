import './App.css';
import GetPayment from './components/GetPayment';
import AddPayment from './components/AddPayment';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './components/HomePage/Home';
import Login from './components/Form/Login';
import Register from './components/Form/Register';




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
            
          </Routes>
     
      </div>
      </Router>
    </>
  );
}

export default App;
