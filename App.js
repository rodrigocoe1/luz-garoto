import {SafeAreaView,FlatList, StyleSheet,Image, Text, View,Button } from 'react-native';
import React,{useState,useEffect} from 'react';
import styled from 'styled-components/native';
export default function App() {
  const [pokemons,setPokemons] = useState([])
  useEffect(() =>{
    fetch('https://pokeapi.co/api/v2/pokemon',{
        method:'GET',
        headers: {
          'Accept': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data=>{
      console.log(data)
      setPokemons(data.results)
    })
  },[])
  return (
    <SafeAreaView style={styles.container}>
       <FlatList 
          data={pokemons}
          keyExtractor={(pokemon) => pokemon.name}
          contentContainerStyle={{flexGrow: 1}}
          renderItem={PokemonShow}
       />
    </SafeAreaView>
  );
}
function PokemonShow(item) {
  const {name,url}  = item.item
  const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon','')
  const ImageUrl = 'https://cdn.traction.one/pokedex/pokemon'+pokemonNumber+'.png'
  return(
    <View style={pokemonEstilo.card}>
      <NomePokemon styles={styles.titulo}>{name}</NomePokemon >
      <Image  style={pokemonEstilo.imagem} 
              source={{uri: ImageUrl.replace('/.png','.png')}}
      />

    </View>
  )
}
const pokemonEstilo = StyleSheet.create({
  card: {
    FlexDirection: 'column',
    width: '350',
    height: '350',
    backgroundColor: '#23412f',
    margin: 1,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  imagem: {
    width:  300,
    height: 300,
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#872',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
});
const NomePokemon = styled.Text`
  color: #563476;
  font-size: 30px
`;