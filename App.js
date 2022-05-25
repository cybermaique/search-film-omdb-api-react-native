import axios from 'axios';
import React, { useState } from 'react'
import { Text, View, TextInput, ScrollView, Image, TouchableHighlight } from 'react-native';

import styles from './src/components/styles'

export default function App() {
  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=f1714670"
  const [state, setState] = useState({
    s: "Enter a movie...",
    results: [],
    selected: {}
  });

  const search = () => {
    axios(apiurl + "&s=" + state.s).then(({ data }) => {
      let results = data.Search

      setState(prevState => {
        return { ...prevState, results: results }
      })
    })
  }

  const openPopup = id => {
    axios(apiurl + "&i" + id).then(({ data }) => {
      let result = data;
      console.log(result);
      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Movie:</Text>
      <TextInput //entrada de texto (search)
        style={styles.searchbox}
        onChangeText={text => setState(prevState => {
          return{...prevState, s: text} //ao clicar no box de pesquisa, conseguimos deletar o texto padrão e digitar 
        })}
        onSubmitEditing={search}
        value={state.s} //texto background igual ao state.s
      />

      <ScrollView style={styles.results}>
        {state.results.map(result => ( //puxa filme pesquisado
        <TouchableHighlight 
          key={result.imdbID} 
          onPress = {() => openPopup(result.imdbID)}
          >
            <View style={styles.result}>
              <Image 
                source={{ uri: result.Poster }} //puxa imagem do filme
                style={{
                  width: '100%', //tamanho imagem
                  height: 300
                }}
                resizeMode="cover"
              />
              <Text style={styles.heading}>
                {result.Title}
              </Text> 
            </View>
          </TouchableHighlight>
        ))}
      </ScrollView>
    </View>
  );
}


