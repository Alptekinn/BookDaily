import React from "react";
import { View, Text } from "react-native";
import Card from "../components/Card";
import styles from "../styles";
import { ScrollView } from "react-native-gesture-handler";
import { UserProvider } from "../Context/UserContext";

const Home = () => {
  
  return (
    <ScrollView>
     
      <UserProvider>
      <View style={styles.homeContainer}>
       <Card/>
       </View>

       </UserProvider>
    </ScrollView>
  );
};
export default Home;
