import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 60,
    flex: 1,
    // backgroundColor: "#fff",
    //   alignItems: 'center',
    justifyContent: "center",
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
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign:'center',
    marginBottom:30,
  }
});

export default styles;