import axios from "axios";

const TRAINING_BASE_REST_API_URL = "http://localhost:8082/es/education/trainings";

class TrainingSchuduleService{
    getAllTrainingSchudule(){
        return axios.get(TRAINING_BASE_REST_API_URL)
    }
    createTrainingSchudule(trainingSchudule){
        return axios.post(TRAINING_BASE_REST_API_URL, trainingSchudule)
    }
    getTrainingSchuduleById(id){
        return axios.get(TRAINING_BASE_REST_API_URL +'/'+ id);
    }
    updateTrainingSchudule(id, trainingSchudule){
        return axios.put(TRAINING_BASE_REST_API_URL + '/updateTraining/' +id, trainingSchudule);
    }
    deleteTrainingSchudule(id){
        return axios.delete(TRAINING_BASE_REST_API_URL + '/' +id);
    }
}
export default new TrainingSchuduleService();