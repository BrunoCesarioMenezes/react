import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

const Participants = ["Bruno", "Bruna", "Bernardo", "Breno", "Maria", "José", "Helena"]
let index: number = 0;

export function Home(){

    function handleParticipantAdd(name : string){
        Participants.includes(name) ?
        Alert.alert("Erro!", "Participante já foi adicionado na lista") :
        console.log("Testando add");
    }

    function handleParticipantRemove(){
        console.log("Testando remove");
    }

    return (
    <View style={styles.container}>
      <View style={styles.addContainer}>
          <Text style={styles.text}>Adicionar participante</Text>
          <TextInput style={styles.input} />

          <TouchableOpacity style={styles.button} onPress={() => handleParticipantAdd("Bruno")}>
              <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
      </View>

      <ScrollView>
        {
            Participants.map(participant =>(
                <Participant key={index++} name={participant} onRemove={handleParticipantRemove}/>
            ))
        }
      </ScrollView>

    </View>
    )
}