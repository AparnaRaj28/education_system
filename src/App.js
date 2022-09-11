import './App.css';
import GetPayment from './components/GetPayment';
import AddPayment from './components/AddPayment';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div >
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/getallpayments' element={<GetPayment/>}></Route>
            <Route path='/addpayment' element={<AddPayment/>}></Route>
          </Routes>
     
      </div>
      </Router>
    </div>
  );
}

export default App;
