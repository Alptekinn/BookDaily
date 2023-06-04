import React from "react";
import { Text, View, Image } from "react-native";
import styles from "../styles";

const ProfileHeader = () => {
  return (
    <View>
      <View style={styles.row}>
        <Image style={styles.img} source={require("../assets/favicon.png")} />
        <Text style={styles.title}>Zeynep Arslan </Text>
      </View>
    </View>
  );
};
export default ProfileHeader;
