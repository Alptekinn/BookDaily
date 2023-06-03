import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles';
import Login from './screens/loginPage';
import Register from './screens/registerPage';
import Home from './screens/homePage';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}