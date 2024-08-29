import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

const SignUpFormOne = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backIconContainer} onPress={() => navigation.goBack()}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/93/93634.png' }}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Image
          source={require('../images/doctor.png')}
          style={styles.icon}
        />
        <Text style={styles.headerTitle}>Meds</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.title}>Formulário de Cadastro</Text>
        
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

        <Text style={styles.label}>Data de Nascimento *</Text>
        <TextInput
          placeholder="dd/mm/yy"
          style={styles.inputField}
          placeholderTextColor="#a9a9a9"
        />

        <Text style={styles.label}>CPF *</Text>
        <TextInput
          placeholder="Seu CPF"
          style={styles.inputField}
          placeholderTextColor="#a9a9a9"
        />

        <Text style={styles.label}>CRM *</Text>
        <TextInput
          placeholder="Seu CRM"
          style={styles.inputField}
          placeholderTextColor="#a9a9a9"
        />

        <Text style={styles.label}>Estado do CRM *</Text>
        <TextInput
          placeholder="O estado do seu CRM"
          style={styles.inputField}
          placeholderTextColor="#a9a9a9"
        />

        <Text style={styles.label}>Especialidade Médica</Text>
        <TextInput
          placeholder="Sua especialidade médica"
          style={styles.inputField}
          placeholderTextColor="#a9a9a9"
        />

        <Text style={styles.label}>Número de Celular *</Text>
        <TextInput
          placeholder="Seu número de celular"
          style={styles.inputField}
          placeholderTextColor="#a9a9a9"
        />

        <View style={styles.footer}>
          <Text style={styles.stepText}>Passo 1 | 2</Text>
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
    backgroundColor: '#003366',
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
    tintColor: '#fff',
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
    color: '#fff',
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
    color: '#003366',
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
  stepText: {
    fontSize: 16,
    color: '#003366',
    marginBottom: 20,
  },
  nextButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#003366',
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

export default SignUpFormOne;
