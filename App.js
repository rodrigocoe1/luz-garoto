import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React,{ useState } from 'react';

export default function App() {
  const [nome,setNome] = useState('Light boy');
  const [sessao, setSessao] = useState('and the Light');
  const [baixavel,setBaixavel] = useState(true)
  const clicado = () =>{
    setNome("Dark boy");
    setSessao("and the Darkness")
    setBaixavel(false)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> { nome } </Text> 
      <Text style={styles.titulo}> { sessao } </Text>
      <Text style={styles.titulo}> { baixavel ? "Esta baixavel" :"esta inbaixavel" } </Text>
      <StatusBar style="auto" />
      <Button title = 'trocar sessao' onPress={clicado}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color: '#fff',
    fontSize: 30,
  },
  paragrafo:{
    fontSize: 15,
    color: '#fff'
  }
});
