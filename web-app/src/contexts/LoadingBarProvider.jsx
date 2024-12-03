import React, { useState } from "react"

export const LoadingBarContext = React.createContext();

const LoadingBarProvider = ({ children }) => {
    const [progress, setProgress] = useState(0);

    return (
        <LoadingBarContext.Provider value={[progress, setProgress]}>
            {children}
        </LoadingBarContext.Provider>
    )
}

export default LoadingBarProvider