import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style = {styles.container}>
      {/* View Compoent*/}
      <View style={styles.boxContainer}>
        <View style ={styles.redBox} />
        <View style ={styles.blueBox} />
        <View style ={styles.greenBox} />
      </View>
      {/* View Compoent*/}
      {/* Text Compoent*/}
      <View style = {styles.textContainer}>
        <Text style = {styles.textComponent}>My first React Native Course</Text>
        <Text style = {styles.nestedText}>Text components can be <Text style={styles.bold}>nested</Text> as well.</Text>
      </View>
      {/* Text Compoent*/}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    // flex: 1,
    justifyContent:'center',
    marginBottom:20,
  },
  boxContainer:{
    flexDirection: 'row',
    justifyContent:'space-around',
    padding:'2%'
  },
  redBox:{
    height: 50,
    width: 50,
    backgroundColor:'red',
    borderRadius: '50%'
  },
  greenBox:{
    height: 50,
    width: 50,
    backgroundColor:'green',
  },
  blueBox:{
    height: 50,
    width: 50,
    backgroundColor:'blue',
  },
  textContainer:{
    justifyContent:'center',
    alignItems: 'center',
  },
  textComponent:{
    fontSize:26,
    padding: '2%',
  },
  nestedText:{
    fontSize: 18
  },
  bold:{
    fontWeight: 'bold',
  },
});
