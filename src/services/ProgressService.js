import axios from "axios";

const PROGRESS_BASE_REST_API_URL = "http://localhost:8082/es/progress";

class ProgressService{
    getAllProgress(){
        return axios.get(PROGRESS_BASE_REST_API_URL)
    }
    createProgress(progress){
        return axios.post(PROGRESS_BASE_REST_API_URL, progress)
    }
    getProgressById(id){
        return axios.get(PROGRESS_BASE_REST_API_URL + '/' +id);
    }
    updateProgress(id, progress){
        return axios.put(PROGRESS_BASE_REST_API_URL + '/updateProgress/' +id, progress);
    }

}
export default new ProgressService();