import axios from "axios";
const COURSE_REST_API_URL  ='http://localhost:8082/es/courses';

class CourseService{
    getAllCourse(){
        return axios.get(COURSE_REST_API_URL );
    }
    createCourse(Course){
        return axios.post(COURSE_REST_API_URL , Course)
    }

    deleteCourse(courseId){

        return axios.delete(COURSE_REST_API_URL +'/' + courseId)
    }
}
export default new CourseService();