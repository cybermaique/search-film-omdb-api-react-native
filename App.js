import axios from 'axios';
import React, { useState } from 'react'
import { Text, View, TextInput, ScrollView, Image, TouchableHighlight, Modal } from 'react-native';

import styles from './src/components/styles'

export default function App() {
  const apiurl = "http://www.omdbapi.com/?apikey=f1714670"
  const [state, setState] = useState({
    s: "Pesquisar Filme 🔎",
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
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;
      console.log(result);
      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  return (
    <View style={styles.container}>
      <TextInput //entrada de texto (search)
        style={styles.searchBox}
        onChangeText={text => setState(prevState => {
          return{...prevState, s: text} //ao clicar no box de pesquisa, conseguimos deletar o texto padrão e digitar 
        })}
        onSubmitEditing={search}
        value={state.s} //texto background igual ao state.s
      />

      <ScrollView style={styles.results}>
        {state.results.map(result => ( //puxa filme pesquisado
        <TouchableHighlight 
          key = {result.imdbID} 
          onPress = {() => openPopup(result.imdbID)}>
            <View style={styles.result}>
              <Text style={styles.heading}>
                {result.Title}
              </Text>
              <Image 
                source={{ uri: result.Poster }} //puxa imagem do filme
                style={{
                  width: '100%', //tamanho imagem
                  height: 450
                }}
                resizeMode="cover"
              />
               
            </View>
          </TouchableHighlight>
        ))}
      </ScrollView>

      {/* Exibir o conteúdo de modal somente se satisfazer os critérios abaixo. No caso, quando o tipo do titulo 
          selecionado for diferente de undefined, exibir HelloWorld com efeitos fade */}
      <Modal 
        animationType='fade'
        transparent={false}
        visible={(typeof state.selected.Title != "undefined") ? true : false}>
        <View style={styles.popup}>
          <Text style={styles.popupTitle}>{state.selected.Title}</Text>
          <Text style={styles.popRatio}>Rating: {state.selected.imdbRating}</Text>
          <Text style={styles.popupDescription}>{state.selected.Plot}</Text> 
        </View>
        <TouchableHighlight //Quando apertar o close, setar State para o state anterior, retornando para a tela inicial
          onPress={() => setState(prevState => {
            return { ...prevState, selected: {} }
          })}
        >
          <Text style={styles.closeBtn}>Close</Text>
        </TouchableHighlight>
      </Modal>
    </View>
  );
}


