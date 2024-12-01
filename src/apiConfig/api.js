import axios from "axios";

const baseUrl = "http://13.232.245.205:8080/api";

const instance = axios.create({
    baseURL: `${baseUrl}`
});

export default instance;
