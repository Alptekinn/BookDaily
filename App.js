import { Text, View } from 'react-native';
import styles from './styles';
import Login from './screens/loginPage';
import Register from './screens/registerPage';
import Home from './screens/homePage';
import Book from './screens/bookPage';
import Notifications from './screens/notificationsPage';
import Profile from './screens/profilePage';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Tabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Book" component={Book} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} /> 
    </Tab.Navigator>
  );
}

function App() {
  
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
