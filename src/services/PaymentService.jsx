import axios from 'axios'

const GETALL_PAYMENT_REST_API = 'http://localhost:8081/es/payments';
const SAVE_PAYMENT_REST_API = 'http://localhost:8081/es/savepayment/student';

class PaymentService{
    getAllPayments(){
        return axios.get(GETALL_PAYMENT_REST_API);
    }

    AddPayment(payment){
        return axios.post(SAVE_PAYMENT_REST_API,payment);
    }
}

export default new PaymentService();