import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import EvolutionFormAnotations from './components/EvolutionFormAnotations';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <EvolutionFormAnotations/>
    </SafeAreaView> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
