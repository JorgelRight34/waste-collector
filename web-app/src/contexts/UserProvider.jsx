import React, { useState, useEffect } from "react";
import api from "../api";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const getUser = async () => {
            const response = await api.get('accounts/user-info/')
            setUser(response.data);
        }
        
        getUser().catch((err) => console.log(err));
    }, [])

    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider