import axios from 'axios'

const GETALL_PAYMENT_REST_API = 'http://localhost:8082/es/payments';
const SAVE_PAYMENT_REST_API = 'http://localhost:8082/es/payment';

class PaymentService{
    getAllPayments(){
        return axios.get(GETALL_PAYMENT_REST_API);
    }

    AddPayment(payment){
        return axios.post(SAVE_PAYMENT_REST_API,payment);
    }
    getPaymentById(id){
        return axios.get(SAVE_PAYMENT_REST_API + '/student/' +id);
    }
}

export default new PaymentService();