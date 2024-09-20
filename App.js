import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import EvolutionFormGeneral from './components/EvolutionFormGeneral';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <EvolutionFormGeneral/>
    </SafeAreaView> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
