import React from "react";
import { Button, Text, TextInput, View, Alert } from "react-native";
import styles from "../styles";
import Register from "./registerPage";

const Login = () => {
  const [text, onChangeText] = React.useState("");
  const [pass, onChangePass] = React.useState("");
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Kullanıcı Adı"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePass}
        value={pass}
        placeholder="Şifre"
        // keyboardType="numeric"
      />
      <View style={styles.fixToText}>
        <Button
          color="#555"
          title="Kayıt Ol"
          onPress={() => Alert.alert('Kayıt Ol Önce Amk ')}
        />
        <Button
          title="Giriş Yap"
          onPress={() => Alert.alert('Giriş yapamazsın ask')}
        />
      </View>
    </View>
  );
};

export default Login;