import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"rgb(17, 16, 16)",
    padding: 48,
    gap: 12
  },

  addContainer: {
    marginTop: 20,
    marginBottom: 20,
    gap: 16,
  },

  text : {
    color: "white",
    fontWeight: 'bold',
    fontSize: 24,
  },

  input: {
    backgroundColor: '#f5f5f5',
    fontSize: 16,
    color: '#000',
    padding: 12,
    width: 250
  },

  button: {
    backgroundColor: '#4CAF50',
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