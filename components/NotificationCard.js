import React from "react";
import { Text, View, Image } from "react-native";
import styles from "../styles";

const NotificationCard = () => {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.notificationCard}>
        <View style={styles.row}>
          <Image source={require("../assets/favicon.png")} />
          <View>
            <Text> İsim yazılacak ZeyAlp</Text>
            <Text>lefkksşğwpldkem wüdğşelpkfrgo şwğdelfrm üşdğwlefkrm dwğlpekrgom şwdğekorgm</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default NotificationCard;
