import { Button, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const Basics = () => {
  const [count, setCount] = useState <number>(0);
  return (
    <SafeAreaView style = {styles.container}>
      {/* View Compoent*/}
      <Text style={styles.headerText}>View Component</Text>
      <View style={styles.boxContainer}>
        <View style ={styles.redBox} />
        <View style ={styles.blueBox} />
        <View style ={styles.greenBox} />
      </View>
      {/* View Compoent*/}
      {/* Text Compoent*/}
      <View style = {styles.textContainer}>
      <Text style={styles.headerText}>Text Component</Text>
        <Text style = {styles.textComponent}>My first React Native Course</Text>
        <Text style = {styles.nestedText}>Text components can be <Text style={styles.bold}>nested</Text> as well.</Text>
      </View>
      {/* Text Compoent*/}
      {/* Image Compoent*/}
        <View style={styles.imageComponentContainer}>
        <Text style={styles.headerText}>Image Component</Text>
          {/* rendering a remote image*/}
          <Image source={{uri: 'https://plus.unsplash.com/premium_photo-1664124381855-3131b9a386d8?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} style={styles.imageComponent}/>
          {/* rendering a local image*/}
          <Image source={require('../../assets/React-icon.svg.png')} style={styles.localImageComponent}/>
        </View>
      {/* Image Compoent*/}
      {/* Button Component*/}
      <Text style={styles.headerText}>Button Component</Text>
      <Button title="Click Me" onPress={()=> setCount(count + 1)}/>
      <Text>Count is {count}</Text>
      {/* Button Component*/}
    </SafeAreaView>
  );
};

export default Basics;

const styles = StyleSheet.create({
    container:{
      justifyContent:'center',
      alignItems:'center',
    },
    headerText:{
      fontWeight:'bold',
      textDecorationLine:'underline',
    },
    boxContainer:{
      flexDirection:'row',
      justifyContent:'space-evenly',
      alignItems:'center',
      padding:'2%',
      width:'100%',
    },
    redBox:{
      height: 50,
      width: 50,
      backgroundColor:'red',
      borderRadius: '50%',
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
      fontSize: 18,
    },
    bold:{
      fontWeight: 'bold',
    },
    imageComponentContainer:{
      padding: '2%',
      justifyContent:'center',
      alignItems: 'center',
      gap: '5%',
    },
    imageComponent:{
      height: 100,
      width: 100,
      resizeMode:'contain',
    },
    localImageComponent:{
      height: 100,
      width: 100,
      resizeMode:'contain',
    },
  });
