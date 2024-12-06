import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Route from './screens/Route';
import BinsStatus from './screens/BinsStatus';
import History from './screens/History';
import Login from './screens/Login';
import UserProvider from './contexts/UserProvider';
import LoadingBarProvider from './contexts/LoadingBarProvider';

const Stack = createStackNavigator();

export default function App() {

  return (
    <UserProvider>
      <LoadingBarProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Inicio'>
            <Stack.Screen name='Iniciar Sesión' component={Login} />
            <Stack.Screen name='Inicio' component={Home} />
            <Stack.Screen name='Historial' component={History} />
            <Stack.Screen name='Ruta' component={Route} />
            <Stack.Screen name='Estado Zafacones' component={BinsStatus} />
          </Stack.Navigator>
        </NavigationContainer>
      </LoadingBarProvider>
    </UserProvider>
  );
}
