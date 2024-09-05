import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

const EvolutionChoiceForm = ({ navigation }) => {
  const [isSinaisVitaisEnabled, setIsSinaisVitaisEnabled] = useState(false);
  const [isSintomasEnabled, setIsSintomasEnabled] = useState(false);
  const [isBalancoHidricoEnabled, setIsBalancoHidricoEnabled] = useState(false);
  const [isPlanoTratamentoEnabled, setIsPlanoTratamentoEnabled] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backIconContainer} onPress={() => navigation.goBack()}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/93/93634.png' }}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Adicionar Evolução</Text>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
          style={styles.profileIcon}S
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.descriptionText}>Escolha o que você deseja adicionar:</Text>

        <View style={styles.toggleContainer}>
          <Image source={require("../images/heart-rate.png")} style={styles.icon} />
          <Text style={styles.label}>Adicionar Sinais Vitais ?</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#1a2c48" }}
            thumbColor={isSinaisVitaisEnabled ? "#1a2c48" : "#f4f3f4"}
            onValueChange={() => setIsSinaisVitaisEnabled(previousState => !previousState)}
            value={isSinaisVitaisEnabled}
          />
        </View>

        <View style={styles.toggleContainer}>
          <Image source={require("../images/paciente.png")} style={styles.icon} />
          <Text style={styles.label}>Adicionar Sintomas ?</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#1a2c48" }}
            thumbColor={isSintomasEnabled ? "#1a2c48" : "#f4f3f4"}
            onValueChange={() => setIsSintomasEnabled(previousState => !previousState)}
            value={isSintomasEnabled}
          />
        </View>

        <View style={styles.toggleContainer}>
          <Image source={require("../images/gota-de-agua.png")} style={styles.icon} />
          <Text style={styles.label}>Adicionar Balanço Hídrico ?</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#1a2c48" }}
            thumbColor={isBalancoHidricoEnabled ? "#1a2c48" : "#f4f3f4"}
            onValueChange={() => setIsBalancoHidricoEnabled(previousState => !previousState)}
            value={isBalancoHidricoEnabled}
          />
        </View>

        <View style={styles.toggleContainer}>
          <Image source={require("../images/medical-services.png")} style={styles.icon} />
          <Text style={styles.label}>Adicionar Plano de Tratamento ?</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#1a2c48" }}
            thumbColor={isPlanoTratamentoEnabled ? "#1a2c48" : "#f4f3f4"}
            onValueChange={() => setIsPlanoTratamentoEnabled(previousState => !previousState)}
            value={isPlanoTratamentoEnabled}
          />
        </View>
      </View>

      <View style={styles.footer}>
      <TouchableOpacity style={styles.nextButton}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271228.png' }}
              style={styles.nextIcon}
            />
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  header: {
    width: width,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  backIconContainer: {
    position: 'absolute',
    left: 20,
  },
  backIcon: {
    width: 28,
    height: 28,
    tintColor: '#1a2c48',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a2c48',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    position: 'absolute',
    right: 20,
  },
  formContainer: {
    width: '100%',
    maxWidth: 350,
    paddingTop: 100,
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a2c48',
    marginBottom: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 25,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a2c48',
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#1a2c48',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '90%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  nextButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#1a2c48',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  nextIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
});

export default EvolutionChoiceForm;
