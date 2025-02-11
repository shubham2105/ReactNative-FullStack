import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const TextInputComponent = () => {
  const [value, setValue] = useState('');
  console.log(value);
  return (
    <View style = {styles.container}>
      <Text style ={styles.headerText}>TextInputComponent</Text>
      <TextInput 
      style = {styles.textInputContainer}
      placeholder="TextInput"
      value={value}
      onChangeText={setValue}
      />
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText:{
        fontWeight:'bold',
        textDecorationLine:'underline',
        padding:'2%',
      },
      textInputContainer:{
        height:25,
        width:'80%',
        borderWidth:1,
        borderColor:'black',
      }
});
