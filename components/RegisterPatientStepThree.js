import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView, Linking } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PatientSignUpFormThree = () => {
  const [selectedState, setSelectedState] = useState("Estável");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backIconContainer}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/93/93634.png' }}
            style={styles.backIcon}
          />
        </TouchableOpacity> 
        <Text style={styles.headerTitle}>Adicionar paciente</Text>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
          style={styles.profileIcon}
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Data de Admissão *</Text>
        <TextInput
          placeholder="dd/mm/yy"
          style={styles.inputField}
          placeholderTextColor="#a9a9a9"
        />

        <Text style={styles.label}>Motivo de internação *</Text>
        <TextInput
          placeholder="Motivo de internação"
          style={styles.inputField}
          placeholderTextColor="#a9a9a9"
        />

        <Text style={styles.label}>Comorbidades *</Text>
        <TextInput
          placeholder="Comorbidades"
          style={styles.inputField}
          placeholderTextColor="#a9a9a9"
        />

        <View style={styles.cidContainer}>
          <Text style={styles.label}>CID *</Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://pebmed.com.br/cid10/')}>
            <Text style={styles.cidLink}>Consultar CID?</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder="Código - Descrição"
          style={styles.inputField}
          placeholderTextColor="#a9a9a9"
        />

        <Text style={styles.label}>Leito *</Text>
        <TextInput
          placeholder="Leito do paciente"
          style={styles.inputField}
          placeholderTextColor="#a9a9a9"
        />

        <Text style={styles.label}>Hipótese *</Text>
        <TextInput
          placeholder="Hipótese diagnóstica"
          style={styles.inputField}
          placeholderTextColor="#a9a9a9"
        />

        <Text style={styles.label}>Estado</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedState}
            onValueChange={(itemValue, itemIndex) => setSelectedState(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Estável" value="Estável" />
            <Picker.Item label="Alerta" value="Alerta" />
            <Picker.Item label="Crítico" value="Crítico" />
          </Picker>
        </View>

        <View style={styles.footer}>
          <Text style={styles.stepText}>Passo 3 | 3</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271228.png' }}
                style={styles.footerBackIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.finishButton}>
              <Text style={styles.finishButtonText}>Finalizar</Text>  
            </TouchableOpacity>
          </View>
        </View>
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
  cidContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a2c48',
    marginBottom: 10,
  },
  cidLink: {
    fontSize: 14,
    color: '#1a2c48',
    textDecorationLine: 'underline',
  },
  inputField: {
    width: '100%',
    height: 50,
    marginBottom: 25,
    paddingHorizontal: 15,
    borderRadius: 25,
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#f0f0f0',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  footerButtons: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerContainer: {
    width: '100%',
    height: 50,
    marginBottom: 25,
    borderRadius: 25,
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
  },
  picker: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#1a2c48',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginRight: 20,
  },
  stepText: {
    fontSize: 16,
    color: '#003366',
    marginBottom: 20,
  },
  footerBackIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
    transform: [{ rotate: '180deg' }],
  },
  navButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#1a2c48',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  finishButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#1a2c48',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    minWidth: 110,
  },
  finishButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
});

export default PatientSignUpFormThree;