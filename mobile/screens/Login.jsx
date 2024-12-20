import { Alert, Text, TextInput, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import styles from '../styles';
import { useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../contexts/UserProvider';
import api from '../api';

const Login = ({ navigation }) => {
    const [, setUser] = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const inputWidth = 300;

    const handleOnPress = async () => {    
        let response;
        console.log("iniciando")
        try {
            try {
                response = await api.post('/accounts/login/', {
                    username: username,
                    password: password
                }, 
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
            } catch (err) {
                console.log(err);
                Alert.alert("Ha habido un error al iniciar sesión")
                await AsyncStorage.removeItem('accessToken', response.data?.access_token);
                await AsyncStorage.removeItem('refreshToken', response.data?.refresh_token);
                return
            }   
            
            await AsyncStorage.setItem('accessToken', response.data?.access_token);
            await AsyncStorage.setItem('refreshToken', response.data?.refresh_token);
            navigation.navigate('Inicio');
        } catch (err) {
            console.log(err);
        }
       
    }

    return (
        <View style={{...styles.container}}>
            <View style={{...styles.mb5}}>
                <Text style={{...styles.h1}}>Bienvenido</Text>
            </View>
            <View style={{...styles.mb5}}>
                <TextInput 
                    style={{...styles.input, ...styles.mb3, width: inputWidth}}
                    onChangeText={setUsername}
                    value={username}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder='Username'
                />

                <TextInput
                    style={{...styles.input, ...styles.mb3, width: inputWidth}}
                    onChangeText={setPassword}
                    value={password}
                    placeholder='Password'
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                />
            </View>
            <View>
                <TouchableOpacity style={{...styles.primaryBtn}} onPress={handleOnPress}>
                    <Text style={{...styles.whiteText}}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login