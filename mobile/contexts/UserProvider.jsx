import React, { useEffect, useState } from "react";
import api from "../api";

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (user) {
            return
        }

        const getUser = async () => {
            const response = await api.get('/accounts/user-info/') ;
            console.log(response.data)
            setUser(response.data)
        }
        
        getUser().catch((err) => console.log(err));
 
    }, [user])

    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider