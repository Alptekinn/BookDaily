import React from "react";
import { Text, View, Image } from "react-native";
import styles from "../styles";

const BookCard = () => {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.notificationCard}>
        <View style={styles.row}>
          <Image
            style={styles.smallProfile}
            source={require("../assets/favicon.png")}
          />
          <View style={styles.marginR45}>
            <Text style={styles.smallTitle}>George Orwell</Text>
            <Text style={[styles.verticalSpace ]} >
              lorem ipsum dolor sir amet. lorem ipsum dolor sir amet. lorem
              ipsum dolor sir amet. lorem ipsum dolor sir amet.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default BookCard;
