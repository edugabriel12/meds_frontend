import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Switch, Dimensions, ScrollView } from 'react-native';

const PatientSignUpFormTwo = () => {
  const [isAddressVisible, setIsAddressVisible] = useState(false);

  const toggleAddressVisibility = () => setIsAddressVisible(previousState => !previousState);

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
        <View style={styles.toggleContainer}>
          <Text style={styles.label}>Adicionar Endereço ?</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#1a2c48" }}
            thumbColor={isAddressVisible ? "#1a2c48" : "#f4f3f4"}
            onValueChange={toggleAddressVisibility}
            value={isAddressVisible}
          />
        </View>

        {isAddressVisible && (
          <>
            <Text style={styles.label}>Rua *</Text>
            <TextInput
              placeholder="Rua"
              style={styles.inputField}
              placeholderTextColor="#a9a9a9"
            />

            <Text style={styles.label}>Número *</Text>
            <TextInput
              placeholder="Número"
              style={styles.inputField}
              placeholderTextColor="#a9a9a9"
            />

            <Text style={styles.label}>Bairro *</Text>
            <TextInput
              placeholder="Bairro"
              style={styles.inputField}
              placeholderTextColor="#a9a9a9"
            />

            <Text style={styles.label}>Complemento</Text>
            <TextInput
              placeholder="Complemento"
              style={styles.inputField}
              placeholderTextColor="#a9a9a9"
            />

            <Text style={styles.label}>CEP *</Text>
            <TextInput
              placeholder="CEP"
              style={styles.inputField}
              placeholderTextColor="#a9a9a9"
            />

            <Text style={styles.label}>Cidade *</Text>
            <TextInput
              placeholder="Cidade"
              style={styles.inputField}
              placeholderTextColor="#a9a9a9"
            />

            <Text style={styles.label}>Estado *</Text>
            <TextInput
              placeholder="Estado"
              style={styles.inputField}
              placeholderTextColor="#a9a9a9"
            />
          </>
        )}

        <View style={styles.footer}>
          <Text style={styles.stepText}>Passo 2 | 3</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271228.png' }}
                style={styles.footerBackIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271228.png' }}
                style={styles.nextBackIcon}
              />
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
  nextBackIcon: {
    width: 28,
    height: 28,
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
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
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
  navIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
});

export default PatientSignUpFormTwo;
