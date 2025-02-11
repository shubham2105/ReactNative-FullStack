import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ScrollViewComponent = () => {
  return (
    <View style = {styles.scrollViewContainer}>
      <Text style = {styles.headerText}>ScrollViewComponent</Text>
      <ScrollView style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}
      bounces={true}
      >
        {/* 
         */}
         {Array.from({ length: 20 }, (_, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.boxText}>{index + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ScrollViewComponent;

const styles = StyleSheet.create({
  scrollViewContainer:{
    justifyContent:'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText:{
    fontWeight:'bold',
    textDecorationLine:'underline',
    padding:'2%',
  },
  scrollView:{
    height:200,
    width:'80%',
    backgroundColor:'lightgrey',
  },
  scrollViewContent:{
    padding:'4%',
  },
  box:{
    margin: 2,
    marginBottom: 10,
    backgroundColor:'skyblue',
    justifyContent:'center',
    alignContent:'center',
  },
  boxText:{
    color:'white',
    textAlign:'center',
    fontWeight:'bold',
  },
});
