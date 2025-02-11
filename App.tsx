import { ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import Basics from './src/components/Basics';
import TextInputComponent from './src/components/TextInputComponent';
import ScrollViewComponent from './src/components/ScrollView';

const App = () => {
  return (
    <>
    <ScrollView contentContainerStyle={styles.ScrollView}>
      <Basics/>
      <TextInputComponent/>
      <ScrollViewComponent/>
    </ScrollView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  ScrollView:{
    padding:10,
  },
});
