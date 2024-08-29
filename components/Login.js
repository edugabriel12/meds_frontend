import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../images/doctor.png')} style={styles.icon} />
        <Text style={styles.headerTitle}>Meds</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.loginTitle}>Login</Text>
        <TextInput
          placeholder="Seu CPF ou e-mail"
          style={styles.inputField}
          placeholderTextColor="#a9a9a9"
        />
        <TextInput
          placeholder="Sua senha"
          secureTextEntry
          style={styles.inputField}
          placeholderTextColor="#a9a9a9"
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.link}>
        <Text style={styles.linkText}>Cadastrar-se</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
        <Text style={styles.linkText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  icon: {
    width: 28,
    height: 28,
    marginRight: 8,
    resizeMode: 'contain',
    overflow: 'hidden',
    tintColor: '#fff',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  card: {
    width: '100%',
    maxWidth: 350,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  loginTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#003366',
  },
  inputField: {
    width: '100%',
    height: 50,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 25,
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#f0f0f0',
  },
  loginButton: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#003366',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 20,
  },
  linkText: {
    color: '#003366',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});

export default Login;
