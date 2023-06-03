import React from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";
import Login from "./loginPage";

const Register = () => {
  const [name, onChangeName] = React.useState("");
  const [surname, onChangeSurname] = React.useState("");
  const [mail, onChangeMail] = React.useState("");
  const [username, onChangeText] = React.useState("");
  const [pass, onChangePass] = React.useState("");
  const navigation = useNavigation();

  const handleSignup = () => {
    const newUser = {
      id: users.length + 1,
      ad: 'name',
      soyad: surname,
      e_posta: mail,
      kullaniciAdi: username,
      sifre: pass,
    };
    
  users.push(newUser);
  Alert.alert("Kayıt başarılı")
  navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
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
        value={text}
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
          onPress={() => handleSignup()}
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
