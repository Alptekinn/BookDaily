import React from "react";
import { Text, View, Image } from "react-native";
import styles from "../styles";

const ProfileHeader = () => {
  return (
    <View>
      <View style={styles}>
        <View style={[styles.row, styles.between]}>
          <View>
            <Image
              style={styles.img}
              source={require("../assets/favicon.png")}
            />
          </View>
          <View style={[styles.middle]}>
            <Text>160</Text>
            <Text>Takipçi</Text>
          </View>
          <View style={[styles.middle]}>
            <Text>168</Text>
            <Text>Takipçi</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default ProfileHeader;
