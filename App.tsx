import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <View style={styles.boxContainer}>
        <View style ={styles.redBox} />
        <View style ={styles.blueBox} />
        <View style ={styles.greenBox} />
      </View>
      <Text>App</Text>
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
  },
  redBox:{
    height: 50,
    width: 50,
    backgroundColor:'red',
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
});
