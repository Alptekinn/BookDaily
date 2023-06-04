import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loginContainer: {
    marginHorizontal: 60,
    flex: 1,
    justifyContent: "center",
  },
  homeContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  input: {
    height: 40,
    marginBottom: 30,
    borderWidth: 1,
    padding: 10,
    width: 272,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  cardArea: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  notificationCard: {
    width: "100%",
    height: 100,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  verticalCenter: {
    verticalAlign: "middle",
  },
  icnBetween: {
    marginHorizontal: 10,
  },
  righ: {
    marginRight: 15,
  },
  row: {
    flexDirection: "row",
  },
  flex2: {
    flex: 2,
  },
  flex1: {
    flex: 1,
  },
  center: {
    justifyContent: "center",
  },
  between: {
    justifyContent: "space-between",
  },
  smallProfile: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  verticalSpace: {
    marginTop: 10,
  },
  middle: { justifyContent: "center", alignItems: "center" },
});

export default styles;
