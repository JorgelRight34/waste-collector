import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import WebView from "react-native-webview";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useFetchPage from "../hooks/useFetchPage";

const BinsRoute = () => {
    const [center, setCenter] = useState([18.456, -69.9475]);
    const [bins, setBins, reload] = useFetchPage('/get-route-bins/');
    const [routes, setRoutes] = useState(null);
    const [injectedTokenScript, setInjectedTokenScript] = useState('');

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
                source={{ uri: 'http://192.168.4.122:5173/route/?embed=true' }} 
                injectedJavaScript={injectedTokenScript} // Only inject when script is ready
                style={{ flex: 1 }} 
            />
            <Text>Hey</Text>
        </>
    );
}

export default BinsRoute;
