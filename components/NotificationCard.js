import React from "react";
import { Text, View, Image } from "react-native";
import styles from "../styles";

const NotificationCard = () => {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.notificationCard}>
        <View style={styles.row}>
          <Image source={require("../assets/favicon.png")} />
          <View style={styles.marginR45}>
            <Text style={styles.smallTitle}> İsim yazılacak ZeyAlp</Text>
            <Text style={[styles.verticalSpace]} >lefkksşğ wpldkem wüdğşel pkfrgo şwğdel frm üşdğw lefkrm dwğlpe krgom şwdğ ekorgm </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default NotificationCard;
