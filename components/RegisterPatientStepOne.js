import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PatientSignUpFormOne = ({ navigation }) => {
  const [selectedGender, setSelectedGender] = useState("Masculino");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backIconContainer} onPress={() => navigation.goBack()}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/93/93634.png' }}
            style={styles.backIcon}
          />
        </TouchableOpacity> 
        <Text style={styles.headerTitle}>Adicionar Paciente</Text>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
          style={styles.profileIcon}
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Nome *</Text>
        <TextInput
          placeholder="Seu nome"
          style={styles.inputField}
          placeholderTextColor="#a9a9a9"
        />

        <Text style={styles.label}>Sobrenome *</Text>
        <TextInput
          placeholder="Seu sobrenome"
          style={styles.inputField}
          placeholderTextColor="#a9a9a9"
        />

        <Text style={styles.label}>Gênero</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedGender}
            onValueChange={(itemValue, itemIndex) => setSelectedGender(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Masculino" value="Masculino" />
            <Picker.Item label="Feminino" value="Feminino" />
            <Picker.Item label="Outro" value="Outro" />
          </Picker>
        </View>

        <Text style={styles.label}>Data de Nascimento *</Text>
        <TextInput
          placeholder="dd/mm/yy"
          style={styles.inputField}
          placeholderTextColor="#a9a9a9"
        />

        <View style={styles.footer}>
          <Text style={styles.stepText}>Passo 1 | 2 </Text>
          <TouchableOpacity style={styles.nextButton}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271228.png' }}
              style={styles.nextIcon}
            />
          </TouchableOpacity>
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
  icon: {
    width: 28,
    height: 28,
    marginRight: 8,
    resizeMode: 'contain',
    tintColor: '#fff',
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#003366',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a2c48',
    marginBottom: 10,
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  stepText: {
    fontSize: 16,
    color: '#003366',
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

export default PatientSignUpFormOne;
