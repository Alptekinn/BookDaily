import React from "react";
import { useContext } from "react";
import { Button, Text, TextInput, View, Alert } from "react-native";
import styles from "../styles";
import Register from "./registerPage";
import { useNavigation } from '@react-navigation/native'
import Home from "./homePage";
import { UserContext } from '../Context/UserContext';
import { triggerNotification } from "../Services/NotificationService";


const Login = () => {
  const { userlogin } = useContext(UserContext);
  const [text, onChangeText] = React.useState("");
  const [pass, onChangePass] = React.useState("");


  const handleLogin = async() => {
    try {
      await userlogin(text, pass);
      navigation.navigate('Home');
      
    } catch (error) {
      console.log(error)
    }
  };


const navigation = useNavigation();
return (
  <View style={styles.loginContainer}>
    <Text style={styles.title}>Giriş Sayfası</Text>
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
      placeholder="Kullanıcı Adı"
    />
    <TextInput
      //secureTextEntry={true}
      style={styles.input}
      onChangeText={onChangePass}
      value={pass}
      placeholder="Şifre"
    />
    <View style={styles.fixToText}>
      <Button
        color="#555"
        title="Kayıt Ol"
        onPress={() => navigation.navigate('Register')}
      />
      <Button
        title="Giriş Yap"
        // onPress={() => navigation.navigate('Home') }
        onPress={() => handleLogin()}
      />
    </View>
  </View>
);
};

export default Login;