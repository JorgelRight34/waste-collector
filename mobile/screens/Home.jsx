import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles';
import { UserContext } from '../contexts/UserProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation }) => {
    const [user, setUser] = useContext(UserContext);

    const navigateTo = (route) => {
        navigation.navigate(route)
    }

    const logout = async () => {
        await AsyncStorage.removeItem('accessToken');
        await AsyncStorage.removeItem('refreshToken');
        await AsyncStorage.removeItem('user');
        setUser(null);
        navigateTo('Iniciar Sesión');
    }

    useEffect(() => {
        if (!user) {
            navigateTo('Iniciar Sesión')
        }
    })

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TouchableOpacity style={styles.primaryBtn} onPress={() => navigateTo('Estado Zafacones')}>
                    <Text style={styles.whiteText}>Estado de Zafacanes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.primaryBtn} onPress={() => navigateTo('Ruta')}>
                    <Text style={styles.whiteText}>Hacer Ruta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.primaryBtn} onPress={() => navigateTo('Historial')}>
                    <Text style={styles.whiteText}>Historial</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.primaryBtn} onPress={logout}>
                    <Text style={styles.whiteText}>Cerrar Sesión</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}
  
export default Home;