import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import UserProvider from "../contexts/UserProvider"
import LoadingScreen from "../pages/LoadingScreen";

const ProtectedRoute = ({ children }) => {
    const [isAuthorized, setIsAuthorized] = useState(null);

    const auth = async () => {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            console.log("No hay token")
            setIsAuthorized(false);
            return;
        }

        const decoded = jwtDecode(token);
        const tokenExpiration = decoded.exp;
        const now = Date.now() / 1000;

        if (tokenExpiration < now) {
            console.log("it has expired")
            await refreshToken();
        } else {
            setIsAuthorized(true);
        }
    };

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem('refreshToken');
        try {
            const res = await api.post('accounts/refresh/', {
                refresh: refreshToken,
            });
            if (res.status === 200) {
                localStorage.setItem('accessToken', res.data.access)
                setIsAuthorized(true)
            } else {
                localStorage.removeItem('refreshToken')
                localStorage.removeItem('accessToken')
                setIsAuthorized(false)
            }
        } catch (error) {
            setIsAuthorized(false);
        }
    };

    useEffect(() => {
        console.log("starting")
        auth().catch((err) => {console.log(err); setIsAuthorized(false);})
    }, [])

    if (isAuthorized === null) {
        return <LoadingScreen />
    }

    return isAuthorized ? (
        <UserProvider> 
            {children}
        </UserProvider>
    ) : <Navigate to="/login" />;
}

export default ProtectedRoute