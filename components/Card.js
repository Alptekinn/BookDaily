import React from "react";
import { Text, View, Image } from "react-native";
import styles from "../styles";

const Card = () => {
  return (
    <View style={styles.cardArea}>
      <View style={styles.cardProfil}>
        <Image source={require("../assets/favicon.png")} />
        <Text> İsim yazılacak ZeyAlp</Text>
      </View>
      <Text>
        aslwdem ğşswlded ğwldpekflpwd ğlwpdeklwpd lpswdkpslkd şğsdlsplwdek
        şldslpdeğ ğswlpdşslde lsdpwld lswdşğlwdp lwdpşwğdlep ğşswlpdslpwd
        ğlpswdlpwdm ldkğşsldp aslwdem ğşswlded ğwldpekflpwd ğlwpdeklwpd
        lpswdkpslkd şğsdlsplwdek şldslpdeğ ğswlpdşslde 
      </Text>
    </View>
  );
};
export default Card;
