import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FlexLayout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Layouting with Flex</Text>
      <Text>Main Axis (Row)</Text>
      <View style={styles.rowContainer}>
        <View style={[styles.box,{backgroundColor:'red'}]}></View>
        <View style={[styles.box,{backgroundColor:'blue'}]}></View>
        <View style={[styles.box,{backgroundColor:'green'}]}></View>
      </View>
      <Text>Cross Axis (Column)</Text>
      <View style={styles.columnContainer}>
      <View style={[styles.box,{backgroundColor:'red'}]}></View>
      <View style={[styles.box,{backgroundColor:'blue'}]}></View>
      <View style={[styles.box,{backgroundColor:'green'}]}></View>
      </View>
    </View>
  );
};

export default FlexLayout;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    headerText:{
        fontWeight:'bold',
        textDecorationLine:'underline',
        padding:'2%',
    },
    rowContainer:{
      flexDirection:'row',
      justifyContent:'space-evenly',
      width:'100%',
    },
    columnContainer:{
      // flexDirection:'column',
      justifyContent:'space-between',
      height:200,
    },
    box:{
      height:30,
      width:30,
    },
});
