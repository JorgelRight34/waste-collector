import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import LoadingScreen from "../screens/LoadingScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProtectedRoute = ({ navigation, children }) => {
    const [isAuthorized, setIsAuthorized] = useState(null);

    const auth = async () => {
        const token = await AsyncStorage.getItem('accessToken');
        if (!token) {
            setIsAuthorized(false);
            return;
        }
        const decoded = jwtDecode(token);
        const tokenExpiration = decoded.exp;
        const now = Date.now() / 1000;

        if (tokenExpiration < now) {
            await refreshToken();
        } else {
            setIsAuthorized(true);
        }
    };

    const refreshToken = async () => {
        const refreshToken = await AsyncStorage.getItem('refreshToken');
        try {
            const res = await api.post('accounts/refresh/', {
                refresh: refreshToken,
            });
            if (res.status === 200) {
                await AsyncStorage.setItem('accessToken', res.data.access)
                setIsAuthorized(true)
            } else {
                await AsyncStorage.removeItem('refreshToken')
                await AsyncStorage.removeItem('accessToken')
                setIsAuthorized(false)
            }
        } catch (error) {
            await AsyncStorage.removeItem('refreshToken')
            await AsyncStorage.removeItem('accessToken')
            setIsAuthorized(false);
        }
    };

    useEffect(() => {
        auth().catch((err) => {console.log(err); setIsAuthorized(false);})
    }, [])

    if (isAuthorized === null) {
        return <LoadingScreen />
    }

    return isAuthorized ? (
        children
    ) : navigation.navigate('Iniciar Sesión');
}

export default ProtectedRoute