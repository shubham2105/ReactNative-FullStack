import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Styling = () => {
  return (
    <View style= {styles.container}>
      <Text style={{backgroundColor:'blue', width:'90%', color:'white', padding:'2%', fontWeight:'bold', textDecorationLine:'underline', borderRadius:5, marginBottom:10}}>Inline Styling</Text>
      <View style={styles.combinedTextStyleContainer}>
        <Text style={[styles.combinedTextStyle,{textDecorationLine:'underline'}]}>Combined Text Styling</Text>
        <Text style={[styles.combinedTextStyle,{textDecorationLine:'underline', textDecorationColor:'red',color:'red'}]}>Combined Text Styling with different color</Text>
      </View>
    </View>
  );
};

export default Styling;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    combinedTextStyleContainer:{
        width:'90%',
        backgroundColor:'lightyellow',
        borderColor:'black',
        borderWidth:1,
        padding:'2%',
        borderRadius:5,
    },
    combinedTextStyle:{
       fontWeight:'bold',
       marginBottom:5,
    },
});
