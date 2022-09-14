import axios from 'axios'

const GETALL_TRAINING_SCHEDULE_REST_API = 'http://localhost:8082/es/getAllTrainingSchedules';
// const SAVE_PAYMENT_REST_API = 'http://localhost:8081/es/savepayment/student';

class PaymentService{
    getAllTrainingSchedules(){
        return axios.get(GETALL_TRAINING_SCHEDULE_REST_API);
    }

    // AddPayment(payment){
    //     return axios.post(SAVE_PAYMENT_REST_API,payment);
    // }
}

export default new PaymentService();