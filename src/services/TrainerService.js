import axios from 'axios';

const TRAINER_BASE_REST_API_URL = "http://localhost:8082/es/trainers";


class TrainerService{
    getAllTrainers()
    {
        return axios.get(TRAINER_BASE_REST_API_URL)
    }
    createTrainer(trainer)
    {
        return axios.post(TRAINER_BASE_REST_API_URL, trainer)
    }
    getTrainerById(id)
    {
        return axios.get(TRAINER_BASE_REST_API_URL + '/' +id);
    }
    updateTrainer(id, trainer){
        // alert("trainer" + id + trainer);
        return axios.put(TRAINER_BASE_REST_API_URL + '/updateTrainer/' +id, trainer);
        
    }
    deleteTRainer(id){
        return axios.delete(TRAINER_BASE_REST_API_URL + '/' +id);
    }
}
export default new TrainerService();