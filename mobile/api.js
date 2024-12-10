import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios"
import { jwtDecode } from "jwt-decode";

url1 = 'http://192.168.4.122:8000/'
url2 = 'http://10.0.0.17:8000/'

url = 'http://10.11.0.133:8000/'

const api = axios.create({
    baseURL: url
});

api.interceptors.request.use(
    async (config) => {     
        const token = await AsyncStorage.getItem('accessToken');

        if (token) {
            // Check if token is expired
            const decoded = jwtDecode(token);
            const tokenExpiration = decoded.exp;
            const now = Date.now() / 1000;

            // If token is not expired then add the Authorization header 
            // in every request, otherwise don't add it
            if (tokenExpiration > now) {
                config.headers.Authorization = `Bearer ${token}`
            } else {
                const refreshToken = await AsyncStorage.getItem('refreshToken');
                try {
                    const response = await fetch(`${url}accounts/refresh/`, {
                        method: 'GET',
                        body: JSON.stringify({
                            refreshToken: refreshToken
                        }),
                    });
                    const data = await response.json();
                    if (res.status === 200) {
                        await AsyncStorage.setItem('accessToken', data.data.access);
                    } else {
                        await AsyncStorage.removeItem('refreshToken');
                        await AsyncStorage.removeItem('accessToken');
                    }
                } catch (error) {
                    await AsyncStorage.removeItem('refreshToken');
                    await AsyncStorage.removeItem('accessToken');
                }
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