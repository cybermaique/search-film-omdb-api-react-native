import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#33302F',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 20
    },
    searchBox: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      padding: 10,
      width: '84%',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      marginTop: 20,
      marginBottom: 20
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
      color: 'white',
      alignItems: "center",
      fontSize: 20,
      fontWeight: '600',
      textAlign: "center",
      padding: 5,
      backgroundColor: 'rgba(255, 5, 5, 0.15)'
    },
    popup:{
      padding: 20
    },
    popupTitle: {
      textAlign: "center",
      fontSize: 24,
      fontWeight: '700',
      marginBottom: 10
    },
    popRatio:{
      fontSize: 20,
      fontWeight: '700',
      marginBottom: 20,
    },
    popupDescription:{
      fontSize: 18,
      marginBottom: 5
    },
    closeBtn: {
      padding: 10,
      fontSize: 15,
      textAlign: "center",
      color: 'black',
      fontWeight: '700',
      backgroundColor: 'rgba(255, 5, 5, 0.15)',
      width: 120,
      height: 50,
      // marginLeft: 160,
      alignSelf: "center"
    }
    
  });