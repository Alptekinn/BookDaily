import React from "react";
import { Text, View, Image } from "react-native";
import styles from "../styles";

const ProfileHeader = () => {
  return (
    <View>
      <View style={[styles.homeContainer,styles.test]}>
        <View style={[styles.row, styles.between, styles.profileCard]}>
          <View style={styles.middle}>
            <Image
              style={[styles.img ]}
              source={{uri:'https://doodleipsum.com/600?shape=circle'}}
            />
          </View>
          <View style={[styles.middle]}>
            <Text style={styles.smallTitle}>10</Text>
            <Text >Görüş</Text>
          </View>
          <View style={[styles.middle]}>
            <Text style={styles.smallTitle}>160</Text>
            <Text >Takip</Text>
          </View>
          <View style={[styles.middle, styles.marginR15]}>
            <Text style={styles.smallTitle}>168</Text>
            <Text >Takipçi</Text>
          </View>
          
        </View>
        <View>
          <Text>Takip Et</Text>
        </View>
      </View>
    </View>
  );
};
export default ProfileHeader;
