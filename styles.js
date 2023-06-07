import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loginContainer: {
    marginHorizontal: 60,
    flex: 1,
    justifyContent: "center",
  },
  line: {
    marginTop:17,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  cardMargin: {
    marginBottom: 20,
  },

  test: {
    marginBottom: 180,

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
  smallTitle: {
    fontSize: 16,
    fontWeight: 'bold'
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
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  profileCard: {
    width: "100%",
    height: 150,
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
  },
  verticalCenter: {
    verticalAlign: "middle",
  },
  icnBetween: {
    marginHorizontal: 10,
  },
  marginR15: {
    marginRight: 15,
  },
  marginR45: {
    marginRight: 45,
    marginLeft: 10,
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
