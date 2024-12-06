import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles';
import { UserContext } from '../contexts/UserProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons'
import ProtectedRoute from '../components/ProtectedRoute';

const Home = ({ navigation }) => {
    const [, setUser] = useContext(UserContext);

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


    return (
        <ProtectedRoute navigation={navigation}>
            <SafeAreaView style={styles.container}>
                <View style={{...styles.p3}}>
                    <Text style={{...styles.h2}}>Opciones</Text>
                </View>
                <View>
                    <TouchableOpacity 
                        style={{...styles.primaryBtn, ...styles.rowCenter }} 
                        onPress={() => navigateTo('Estado Zafacones')}
                    >
                        <FontAwesome icon="facebook" size={25} color="white" />
                        <Text style={styles.whiteText}>
                            Estado de Zafacanes
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{...styles.primaryBtn, ...styles.rowCenter}} 
                        onPress={() => navigateTo('Ruta')}
                    >
                        <FontAwesome icon="road" size={25} color="white" />
                        <Text style={styles.whiteText}>Hacer Ruta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{...styles.primaryBtn, ...styles.rowCenter}} 
                        onPress={() => navigateTo('Historial')}
                    >
                        <FontAwesome icon="fa-solid fa-clock-rotate-left" size={25} color="white" />
                        <Text style={styles.whiteText}>Historial</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{...styles.primaryBtn, ...styles.rowCenter}} 
                        onPress={logout}
                    >
                        <FontAwesome icon="fa-solid fa-arrow-right-from-bracket" size={25} color="white" />
                        <Text style={styles.whiteText}>Cerrar Sesión</Text>
                    </TouchableOpacity>
                </View>
                <StatusBar style="auto" />
            </SafeAreaView>
        </ProtectedRoute>
    );
}
  
export default Home;