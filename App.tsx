import { ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import Basics from './src/components/Basics';
import TextInputComponent from './src/components/TextInputComponent';
import ScrollViewComponent from './src/components/ScrollView';
import Styling from './src/components/Styling';

const App = () => {
  return (
    <>
    <ScrollView contentContainerStyle={styles.ScrollView}>
      <Basics/>
      <TextInputComponent/>
      <ScrollViewComponent/>
      <Styling/>
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
