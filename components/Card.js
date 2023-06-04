import React from "react";
import { Text, View, Image } from "react-native";
import styles from "../styles";
import Icon from "react-native-vector-icons/FontAwesome5";

const Card = () => {
  return (
    <View style={styles.cardArea}>
      <View style={[styles.row, styles.flex1, styles.between]}>
        <View style={[styles.row]}>
          <Image style={styles.smallProfile} source={require("../assets/favicon.png")} />
          <Text style={styles.verticalCenter}> İsim yazılacak ZeyAlp</Text>
        </View>

        <View>
          <Image
            style={[styles.righ, styles.smallProfile]}
            source={require("../assets/favicon.png")}
          />
        </View>
      </View>
      <View>
        <Text>
          aslwdem ğşswlded ğwldpekflpwd ğlwpdeklwpd lpswdkpslkd şğsdlsplwdek
          şldslpdeğ ğswlpdşslde lsdpwld lswdşğlwdp lwdpşwğdlep ğşswlpdslpwd
          ğlpswdlpwdm ldkğşsldp aslwdem ğşswlded ğwldpekflpwd ğlwpdeklwpd
          lpswdkpslkd şğsdlsplwdek şldslpdeğ ğswlpdşslde
        </Text>
      </View>
      <View style={[styles.row, styles.flex2, styles.verticalSpace]}>
        <View style={[styles.row, styles.flex1, styles.center]}>
          <Icon name={"comment"} size={20}></Icon>
          <Text style={[styles.icnBetween]}>38</Text>
        </View>
        <View style={[styles.row, styles.flex1, styles.center]}>
          <Icon name={"heart"} size={20}></Icon>
          <Text style={[styles.icnBetween]}>833</Text>
        </View>
      </View>
    </View>
  );
};
export default Card;
