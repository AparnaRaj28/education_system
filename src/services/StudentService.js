import axios from 'axios'
const STUDENT_REST_API_URL = 'http://localhost:8082/es/students';
class StudentService{
    getAllStudent(){
        return axios.get(STUDENT_REST_API_URL)
    }

    createStudent(student){
        return axios.post(STUDENT_REST_API_URL , student)
    }
    getStudentById(studentId){
        return axios.get(STUDENT_REST_API_URL + '/' + studentId)
    }

    updateStudent(student){
        return axios.put(STUDENT_REST_API_URL +'/' +  student)
    }

    deleteStudent(studentId){

        return axios.delete(STUDENT_REST_API_URL +'/' + studentId)
    }
}
export default new StudentService();