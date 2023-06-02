import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles';
import Login from './screens/loginPage';
import Register from './screens/registerPage';
// import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}