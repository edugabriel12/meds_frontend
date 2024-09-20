import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

const EvolutionFormACV = () => {
  const [selectedButtons, setSelectedButtons] = useState({
    rcr2T: false,
    alteradoRCR: false,
    mvhAht: false,
    alteradoMvh: false,
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
        <Text style={styles.descriptionText}>ACV:</Text>

        <View style={styles.buttonGroup}>
          <View style={styles.row}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedButtons.rcr2T ? styles.selectedButton : styles.unselectedButton,
              ]}
              onPress={() => toggleButton('rcr2T', 'alteradoRCR')}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedButtons.rcr2T ? styles.selectedButtonText : styles.unselectedButtonText,
                ]}
              >
                RCR em 2T
              </Text>
            </TouchableOpacity>
            <Text style={styles.separator}>/</Text>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedButtons.alteradoRCR ? styles.selectedButton : styles.unselectedButton,
              ]}
              onPress={() => toggleButton('alteradoRCR', 'rcr2T')}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedButtons.alteradoRCR ? styles.selectedButtonText : styles.unselectedButtonText,
                ]}
              >
                Alterado
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.descriptionText}>AR:</Text>

          <View style={styles.row}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedButtons.mvhAht ? styles.selectedButton : styles.unselectedButton,
              ]}
              onPress={() => toggleButton('mvhAht', 'alteradoMvh')}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedButtons.mvhAht ? styles.selectedButtonText : styles.unselectedButtonText,
                ]}
              >
                MVH em AHT
              </Text>
            </TouchableOpacity>
            <Text style={styles.separator}>/</Text>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedButtons.alteradoMvh ? styles.selectedButton : styles.unselectedButton,
              ]}
              onPress={() => toggleButton('alteradoMvh', 'mvhAht')}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedButtons.alteradoMvh ? styles.selectedButtonText : styles.unselectedButtonText,
                ]}
              >
                Alterado
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.stepText}>Passo 5 | 6</Text>
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

export default EvolutionFormACV;
