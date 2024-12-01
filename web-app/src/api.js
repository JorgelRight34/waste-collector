import axios from "axios"
import { jwtDecode } from "jwt-decode";

const DEV = 'http://127.0.0.1:8000/'
const DEV1 = `http://10.0.0.17:8000/`

const api = axios.create({
    baseURL: DEV
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            // Check if token is expired
            const decoded = jwtDecode(token);
            const tokenExpiration = decoded.exp;
            const now = Date.now() / 1000;

            // If token is not expired then add the Authorization header 
            // in every request, otherwise don't add it
            if (tokenExpiration > now) {
                config.headers.Authorization = `Bearer ${token}`
            }
        }       
        return config
    },
    (error) => {
        console.log(error)
        throw Promise.reject(error);    
    }
)

export default api