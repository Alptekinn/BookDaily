import React from "react";
import { View, Text } from "react-native";
import Card from "../components/Card";
import styles from "../styles";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.homeContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
    </ScrollView>
  );
};
export default Home;
