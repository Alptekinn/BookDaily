import { Text, View } from "react-native";
import styles from "./styles";
import Login from "./screens/loginPage";
import Register from "./screens/registerPage";
import Home from "./screens/homePage";
import Book from "./screens/bookPage";
import Notifications from "./screens/notificationsPage";
import Profile from "./screens/profilePage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

function Tabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Icon name={"home"} size={20}></Icon>,
          tabBarShowLabel: false,
          headerTitle:'Book Daily'
        }}
        
      />
      <Tab.Screen
        name="Book"
        component={Book}
        options={{
          tabBarIcon: () => <Icon name={"book"} size={20}></Icon>,
          tabBarShowLabel: false,
          headerTitle:'Kitaplar'
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: () => <Icon name={"bell"} size={20}></Icon>,
          tabBarShowLabel: false,
          headerTitle:'Bildirimler'
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <Icon name={"user"} size={20}></Icon>,
          tabBarShowLabel: false,
          headerTitle:'Profilim'
        }}
      />
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
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{
            title: "BookDaily",
            headerStyle: {
              backgroundColor: "#1e42f4",
            },
            headerTintColor: "#fff",
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
