import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      // flexDirection: 'row',
      // backgroundColor: '#33302F',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 20
    },
    searchBox: {
      // padding: 10,
      // width: '84%',
      // flex: 1,
      // backgroundColor: '#F8F9FA',
      // // paddingLeft: 40,
      // marginHorizontal: 20,
      // borderRadius: 8,
      // fontSize: 18,
      // borderColor: '#E4E7EB',
      // borderWidth: 1

      fontSize: 20,
      fontWeight: "130",
      backgroundColor: '#F8F9FA',
      padding: 10,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#E4E7EB',
      width: 300,
      height: 40,
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
      color: 'black',
      alignItems: "center",
      fontSize: 20,
      fontWeight: '600',
      textAlign: "center",
      padding: 5,
      backgroundColor: 'rgba(120, 220, 99, 1)'
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
    },
    iconSearch:{
      position: "absolute",
      right: 5,
      top: 27
    }
    
  });