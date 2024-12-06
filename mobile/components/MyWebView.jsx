import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import WebView from "react-native-webview";

const MyWebView = ({ uri, style }) => {
    const [injectedTokenScript, setInjectedTokenScript] = useState(null);

    useEffect(() => {
        const getToken = async () => {
            const accessToken = await AsyncStorage.getItem('accessToken');
            const refreshToken = await AsyncStorage.getItem('refreshToken');
            
            if (accessToken && refreshToken) {
                // Only set injectedTokenScript once
                const injectTokenScript = `
                    localStorage.setItem('accessToken', '${accessToken}');
                    localStorage.setItem('refreshToken', '${refreshToken}');
                `;
                setInjectedTokenScript(injectTokenScript); // Set token injection script
            }
        };

        if (!injectedTokenScript) {
            getToken(); // Only call getToken once
        }

    }, [injectedTokenScript]); // Only run this effect when injectedTokenScript changes

    return (
        <>  
            <WebView
                source={{ uri: uri }} 
                injectedJavaScript={injectedTokenScript} // Only inject when script is ready
                style={{ flex: 1 }} 
            />
        </>
    );
}

export default MyWebView