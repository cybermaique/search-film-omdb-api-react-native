import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#223343',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 70
    },
    title: {
      color: '#fff',
      fontSize: 32,
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: 20
    },
    searchbox: {
      fontSize: 20,
      fontWeight: '300',
      padding: 20,
      width: '100%',
      backgroundColor: '#FFF',
      borderRadius: 8,
      marginBottom: 40
    },
    results: {
      flex: 1
    },
    result: {
      flex: 1,
      width: '100%',
      marginBottom: 20
    },
    heading: {
      color: '#FFF',
      fontSize: 18,
      fontWeight: '700',
      padding: 20,
      backgroundColor: '#445565'
    }
  });