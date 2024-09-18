// uso de mock, feito na aula do dia 10/09/2024
//link da "api" https://fea6a96e-cc03-41c2-ba05-43d5987b647d.mock.pstmn.io /auth_sucess orrrr /uth_fail

import { Text, SafeAreaView, Button, StyleSheet } from 'react-native';
import {useState} from 'react';

export default function App() {
  const [message, setMessage] = useState("Clica aqui para ver seu tarô")
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}> {message}</Text>
      <Button title="agora vamo vê" onPress= {() => {
        fetch("https://fea6a96e-cc03-41c2-ba05-43d5987b647d.mock.pstmn.io/auth_fail")
        .then(response => response.json())
        .then(data => {
            if(data.result == 'sucess' ){
              setMessage('Arrasou, bicha!!! ');
            }else {
            setMessage('Eita como lacra errado...');
            }
          })
          .catch(error => {
            setMessage("Erro:  " + error);
          })
      }} /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
