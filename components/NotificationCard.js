import React from "react";
import { Text, View, Image,Button } from "react-native";
import styles from "../styles";
import {SendNotification} from './StaticNotification';


const NotificationCard = () => {

  return (
    <View style={styles.homeContainer}>
      <View style={styles.notificationCard}>
        <View style={styles.row}>
          <Image source={require("../assets/favicon.png")} />
          <View style={styles.marginR45}>
            <Text style={styles.smallTitle}>Statik Bildirim</Text>
            <Text style={[styles.verticalSpace]} >"At vero eos et accusamus et iustatque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</Text>
            <Button
            title="Bildirim gönder"
            onPress={()=>SendNotification()}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default NotificationCard;
