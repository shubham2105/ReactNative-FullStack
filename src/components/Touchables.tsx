import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const Touchables = () => {
    const [count, setCount] = useState <number>(0);
    const [opacityCount, setOpacityCount] = useState(0);
  return (
    <View style = {styles.container}>
      <Text style = {styles.headerText}>Touchable Components</Text>
      <TouchableOpacity style={styles.touchableButton} onPress={()=> setOpacityCount(opacityCount + 0.01)}>
            <Text>Touchable Opacity Component</Text>
      </TouchableOpacity>
      <TouchableHighlight underlayColor={'red'} onPress={()=>{setCount(count + 1);}} style={styles.touchableButton}>
        <Text>Count is {count}</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Touchables;

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        height:500,
    },
    headerText:{
        fontWeight:'bold',
        textDecorationLine:'underline',
        padding:'2%',
    },
    touchableButton:{
        backgroundColor:'lightblue',
        padding:'2%',
        borderRadius:5,
        marginBottom:10,
        width:'80%',
    },
});
