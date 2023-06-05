import * as Notifications from "expo-notifications";
export const triggerNotification = async  () =>{

   try {
    await Notifications.scheduleNotificationAsync({
        content:{
          title:"Kitap Okuma Saatiniz geldi",
          body:"Serinizi bozmayınnn",
        },
        trigger:{ seconds:1
        }
      });
   } catch (error) {
    console.log(error)

   }
  }