import React from "react";
import { Button, Text, TextInput, View, Alert } from "react-native";
import styles from "../styles";
import Register from "./registerPage";
import { useNavigation } from '@react-navigation/native'
import Home from "./homePage";
import { userlogin } from "../Services/AccountService";

const Login = () => {
  const [text, onChangeText] = React.useState("");
  const [pass, onChangePass] = React.useState("");

  
  const handleLogin = () =>{
    userlogin(text,pass)
    .then(data=>  {
      Alert.alert("Başarılı")
      navigation.navigate('Home')
    })
    .catch(error => {
      Alert.alert("Kullanıcı Adı Şifre Yanlış")
      console.error('Login hatası:', error);
      
    });
    
  }

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
          onPress={() => navigation.navigate('Register') }
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