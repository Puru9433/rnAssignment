import axios from "axios";
import { errorToast } from '../utils/alert'


//Here for now putting this base URL here as it can be put
//inside .env file with with dev and prod env
const BASE_URL = 'https://jsonplaceholder.typicode.com'
const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
});

instance.interceptors.request.use(
    config => {
        const token = '';
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        if (config.data instanceof FormData) {
            config.headers['Content-Type'] = 'multipart/form-data';
        } else {
            config.headers['Content-Type'] = 'application/json';
        }

        return config;
    }
)

instance.interceptors.response.use(
    response => response,
    error => {
        if (error) {
            errorToast(error?.response?.message || 'Something went wrong')
        }
        //Here we can set error configuration as we need per required like 401 to logout the user etc.
        return Promise.reject(error);
    }
);

export default instance;