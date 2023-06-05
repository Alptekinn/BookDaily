import React from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";
import Login from "./loginPage";
import { registers } from "../Services/AccountService";
const Register = () => {
  const [name, onChangeName] = React.useState("");
  const [surname, onChangeSurname] = React.useState("");
  const [mail, onChangeMail] = React.useState("");
  const [nickname, onChangeText] = React.useState("");
  const [pass, onChangePass] = React.useState("");
  const navigation = useNavigation();



  const handleRegister = async () => {
    try {
      const User = {
        Name: name,
        Surname: surname,
        Mail: mail,
        Nickname: nickname,
        Password: pass,
        ProfileImage: "https://doodleipsum.com/600?shape=circle",
        Followers: [], 
        Followed: [], 
      };

      await registers(User);
      console.log('Kullanıcı başarıyla kaydedildi.');
      navigation.navigate('Login')
    } catch (error) {
      console.error('Kayıt işlemi başarısız oldu.', error);
    }
  };
  

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.title}>Kayıt Sayfası</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="İsim"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeSurname}
        value={surname}
        placeholder="Soyisim"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeMail}
        value={mail}
        placeholder="E posta"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={nickname}
        placeholder="Kullanıcı Adı"
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        onChangeText={onChangePass}
        value={pass}
        placeholder="Şifre"
      />
      <View style={styles.fixToText}>
        <Button
          title="Kayıt Ol"
          onPress={() => handleRegister()}
        />
        <Button
          color="#555"
          title="Giriş Yap"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
};

export default Register;
