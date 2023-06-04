import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loginContainer: {
    marginHorizontal: 60,
    flex: 1,
    justifyContent: "center",
  },
  homeContainer:{
    flex:1,
    marginHorizontal:20,
    marginVertical:10,
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
  },
  cardArea:{
    width:'100%',
    height:140,
    backgroundColor:'#FFF',
    borderRadius:10,
    marginVertical:10,
    padding:10
  },
  cardProfil:{
    flexDirection:'row',
  }
});

export default styles;