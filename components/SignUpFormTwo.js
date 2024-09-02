import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

const SignUpFormTwo = ({ navigation }) => {
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
        
        <Text style={styles.label}>E-mail *</Text>
        <TextInput
          placeholder="Seu e-mail"
          style={styles.inputField}
          placeholderTextColor="#a9a9a9"
        />

        <Text style={styles.label}>Confirme seu e-mail *</Text>
        <TextInput
          placeholder="Confirme seu e-mail"
          style={styles.inputField}
          placeholderTextColor="#a9a9a9"
        />

        <Text style={styles.label}>Senha *</Text>
        <TextInput
          placeholder="Sua senha"
          style={styles.inputField}
          placeholderTextColor="#a9a9a9"
        />

        <Text style={styles.label}>Confirme sua senha *</Text>
        <TextInput
          placeholder="Confirme sua senha"
          style={styles.inputField}
          placeholderTextColor="#a9a9a9"
        />

        <View style={styles.footer}>
          <Text style={styles.stepText}>Passo 2 | 2</Text>
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
  footerBackIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
    transform: [{ rotate: '180deg' }],
  },
  finishButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SignUpFormTwo;
