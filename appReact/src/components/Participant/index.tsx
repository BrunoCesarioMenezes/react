import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
    name: string,
    onRemove : () => void
}

export function Participant(props : Props){

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{props.name}</Text>
        <TouchableOpacity style={styles.button} onPress={props.onRemove}>
            <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    )
}