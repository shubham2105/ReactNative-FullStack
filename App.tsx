import { ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import Basics from './src/components/Basics';
import TextInputComponent from './src/components/TextInputComponent';
import ScrollViewComponent from './src/components/ScrollView';
import Styling from './src/components/Styling';
import FlexLayout from './src/components/FlexLayout';
import Touchables from './src/components/Touchables';

const App = () => {
  return (
    <>
    <ScrollView contentContainerStyle={styles.ScrollView} keyboardShouldPersistTaps='handled'>
      <Basics/>
      <TextInputComponent/>
      <ScrollViewComponent/>
      <Styling/>
      <FlexLayout/>
      <Touchables/>
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
