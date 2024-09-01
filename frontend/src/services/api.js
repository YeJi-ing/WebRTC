import axios from "axios";

const api = axios.create({
    baseURL: 'http://ec2-52-78-187-152.ap-northeast-2.compute.amazonaws.com:8080',
    //baseURL: 'http://localhost:8080',
    timeout: 1000,
    withCredentials : true
});

export default api;