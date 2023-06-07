import * as Notifications from "expo-notifications";

export const SendNotification = async () => {
  try {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Kitap Okuma Saatiniz geldi",
        body: "Serinizi bozmayınnn",
      },
      trigger: { date: new Date().getTime() + 10000,repeats:false }, 
      
    });
  } catch (error) {
    console.log(error);
  }
};
