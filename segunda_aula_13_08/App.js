import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
const MyComponent = ({appCount, setAppCount}) => {
  const [count, setCount] = React.useState(0);
  return (
    <View>
      <Text> Você clicou no botão {count} vezes! </Text>
      <Button 
        title="Clique aqui!" 
        onPress={() => {
          setCount(count + 1);
          setAppCount(appCount + 1);
        }} 
      />
    </View>
  );
}

const App = () => {
  const [appCount, setAppCount] = React.useState(0);
  const [sum, setSum] = React.useState(0);
  return (
    <View style = {styles.container}>
      <MyComponent appCount={appCount} setAppCount={setAppCount} />
      <MyComponent appCount={appCount} setAppCount={setAppCount} />
      {
        appCount!=0 ? 
          (<Text>No total você clicou {appCount} vezes num botão! </Text>) : 
          (<Text> </Text>)
      }
      <TextInput 
        keyboardType="numeric"
        value={sum}
        onChangeText={text => setSum(parseInt(text))}
        style={styles.input}
      />
      <Button
        title="Somar"
        onPress={() => {
          setAppCount(appCount + sum);
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  input: {
    height: 30,
    borderColor: '#AAA',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 15
  }
});
export default App;
