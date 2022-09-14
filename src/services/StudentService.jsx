import axios from 'axios'

const GETALL_STUDENT_REST_API = 'http://localhost:8082/es/getAllStudents';
// const SAVE_PAYMENT_REST_API = 'http://localhost:8081/es/savepayment/student';

class StudentService{
    getAllStudents(){
        return axios.get(GETALL_STUDENT_REST_API);
    }

    // AddPayment(payment){
    //     return axios.post(SAVE_PAYMENT_REST_API,payment);
    // }
}

export default new StudentService();