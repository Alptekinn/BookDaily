import React from "react";
import { Text, View, Image } from "react-native";
import styles from "../styles";
import Icon from "react-native-vector-icons/FontAwesome5";

const Card = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.cardArea}>
        <View style={styles.row}>
          <Image style={styles} source={require("../assets/favicon.png")} />
          <Text style={styles.verticalCenter}> İsim yazılacak ZeyAlp</Text>
        </View>
        <View>
          <Text>
            aslwdem ğşswlded ğwldpekflpwd ğlwpdeklwpd lpswdkpslkd şğsdlsplwdek
            şldslpdeğ ğswlpdşslde lsdpwld lswdşğlwdp lwdpşwğdlep ğşswlpdslpwd
            ğlpswdlpwdm ldkğşsldp aslwdem ğşswlded ğwldpekflpwd ğlwpdeklwpd
            lpswdkpslkd şğsdlsplwdek şldslpdeğ ğswlpdşslde
          </Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.row, styles.icnBetween]}>
            <Icon name={"comment"} size={20}></Icon>
            <Text>38</Text>
          </View>
          <View style={[styles.row, styles.icnBetween]}>
            <Icon name={"heart"} size={20}></Icon>
            <Text>833</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Card;
