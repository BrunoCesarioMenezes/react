import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    backgroundColor:"rgb(66, 66, 66)",
    flexDirection: 'row',
    width: '100%',
    justifyContent:'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 5,
  },

  text : {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },


  button: {
    backgroundColor:"rgb(201, 38, 38)",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 60,
    height: 60,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 24,
  }
})