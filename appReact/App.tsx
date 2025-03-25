import { View, Text, StyleSheet } from "react-native";

export default function App(){
    return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá, mundo!</Text>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"rgb(17, 16, 16)",
    padding: 24
  },
  text : {
    color: "white",
    fontWeight: 'bold',
    fontSize: 24,
  }
})