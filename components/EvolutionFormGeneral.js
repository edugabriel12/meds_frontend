import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

const EvolutionFormGeneral = () => {
  const [selectedButtons, setSelectedButtons] = useState({
    consciente: false,
    inconsciente: false,
    corada: false,
    hipocorada: false,
    anicterica: false,
    icterica: false,
    afebril: false,
    febril: false,
    orientada: false,
    desorientada: false,
    hidratada: false,
    desidratada: false,
    acianotica: false,
    cianotica: false,
  });

  const toggleButton = (buttonName, oppositeButtonName) => {
    setSelectedButtons((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
      [oppositeButtonName]: false,
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backIconContainer}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/93/93634.png' }}
            style={styles.backIcon}
          />
        </TouchableOpacity> 
        <Text style={styles.headerTitle}>Adicionar Evolução</Text>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
          style={styles.profileIcon}
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.descriptionText}>Geral:</Text>

        <View style={styles.buttonGroup}>
          <View style={styles.row}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedButtons.consciente ? styles.selectedButton : styles.unselectedButton,
              ]}
              onPress={() => toggleButton('consciente', 'inconsciente')}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedButtons.consciente ? styles.selectedButtonText : styles.unselectedButtonText,
                ]}
              >
                Consciente
              </Text>
            </TouchableOpacity>
            <Text style={styles.separator}>/</Text>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedButtons.inconsciente ? styles.selectedButton : styles.unselectedButton,
              ]}
              onPress={() => toggleButton('inconsciente', 'consciente')}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedButtons.inconsciente ? styles.selectedButtonText : styles.unselectedButtonText,
                ]}
              >
                Inconsciente
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedButtons.corada ? styles.selectedButton : styles.unselectedButton,
              ]}
              onPress={() => toggleButton('corada', 'hipocorada')}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedButtons.corada ? styles.selectedButtonText : styles.unselectedButtonText,
                ]}
              >
                Corado(a)
              </Text>
            </TouchableOpacity>
            <Text style={styles.separator}>/</Text>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedButtons.hipocorada ? styles.selectedButton : styles.unselectedButton,
              ]}
              onPress={() => toggleButton('hipocorada', 'corada')}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedButtons.hipocorada ? styles.selectedButtonText : styles.unselectedButtonText,
                ]}
              >
                Hipocorado(a)
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedButtons.anicterica ? styles.selectedButton : styles.unselectedButton,
              ]}
              onPress={() => toggleButton('anicterica', 'icterica')}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedButtons.anicterica ? styles.selectedButtonText : styles.unselectedButtonText,
                ]}
              >
                Anictérico(a)
              </Text>
            </TouchableOpacity>
            <Text style={styles.separator}>/</Text>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedButtons.icterica ? styles.selectedButton : styles.unselectedButton,
              ]}
              onPress={() => toggleButton('icterica', 'anicterica')}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedButtons.icterica ? styles.selectedButtonText : styles.unselectedButtonText,
                ]}
              >
                Ictérico(a)
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedButtons.afebril ? styles.selectedButton : styles.unselectedButton,
              ]}
              onPress={() => toggleButton('afebril', 'febril')}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedButtons.afebril ? styles.selectedButtonText : styles.unselectedButtonText,
                ]}
              >
                Afebril
              </Text>
            </TouchableOpacity>
            <Text style={styles.separator}>/</Text>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedButtons.febril ? styles.selectedButton : styles.unselectedButton,
              ]}
              onPress={() => toggleButton('febril', 'afebril')}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedButtons.febril ? styles.selectedButtonText : styles.unselectedButtonText,
                ]}
              >
                Febril
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedButtons.orientada ? styles.selectedButton : styles.unselectedButton,
              ]}
              onPress={() => toggleButton('orientada', 'desorientada')}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedButtons.orientada ? styles.selectedButtonText : styles.unselectedButtonText,
                ]}
              >
                Orientado(a)
              </Text>
            </TouchableOpacity>
            <Text style={styles.separator}>/</Text>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedButtons.desorientada ? styles.selectedButton : styles.unselectedButton,
              ]}
              onPress={() => toggleButton('desorientada', 'orientada')}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedButtons.desorientada ? styles.selectedButtonText : styles.unselectedButtonText,
                ]}
              >
                Desorientado(a)
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedButtons.hidratada ? styles.selectedButton : styles.unselectedButton,
              ]}
              onPress={() => toggleButton('hidratada', 'desidratada')}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedButtons.hidratada ? styles.selectedButtonText : styles.unselectedButtonText,
                ]}
              >
                Hidratado(a)
              </Text>
            </TouchableOpacity>
            <Text style={styles.separator}>/</Text>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedButtons.desidratada ? styles.selectedButton : styles.unselectedButton,
              ]}
              onPress={() => toggleButton('desidratada', 'hidratada')}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedButtons.desidratada ? styles.selectedButtonText : styles.unselectedButtonText,
                ]}
              >
                Desidratado(a)
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedButtons.acianotica ? styles.selectedButton : styles.unselectedButton,
              ]}
              onPress={() => toggleButton('acianotica', 'cianotica')}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedButtons.acianotica ? styles.selectedButtonText : styles.unselectedButtonText,
                ]}
              >
                Acianótico(a)
              </Text>
            </TouchableOpacity>
            <Text style={styles.separator}>/</Text>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedButtons.cianotica ? styles.selectedButton : styles.unselectedButton,
              ]}
              onPress={() => toggleButton('cianotica', 'acianotica')}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedButtons.cianotica ? styles.selectedButtonText : styles.unselectedButtonText,
                ]}
              >
                Cianótico(a)
              </Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.footer}>
          <Text style={styles.stepText}>Passo 2 | 5</Text>
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
  buttonGroup: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  toggleButton: {
    flex: 1,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  selectedButton: {
    backgroundColor: '#1a2c48',
  },
  unselectedButton: {
    backgroundColor: '#ffffff',
    borderColor: '#1a2c48',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedButtonText: {
    color: '#ffffff',
  },
  unselectedButtonText: {
    color: '#1a2c48',
  },
  separator: {
    marginHorizontal: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a2c48',
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
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: -20,
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
  nextBackIcon: {
    width: 28,
    height: 28,
    tintColor: '#fff',
  },
  footerBackIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
    transform: [{ rotate: '180deg' }],
  },
});

export default EvolutionFormGeneral;
