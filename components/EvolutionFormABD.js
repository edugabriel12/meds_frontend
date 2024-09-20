import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

const EvolutionFormABD = () => {
  const [selectedButtons, setSelectedButtons] = useState({
    RHA: false,
    Plano: false,
    Semigloboso: false,
    Globoso: false,
    Depressível: false,
    SemVMG: false,
    Alterado: false,
  });

  const toggleButton = (buttonName) => {
    setSelectedButtons((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));
  };

  const renderCheckbox = (isSelected) => {
    return (
      <View style={isSelected ? styles.selectedCheckbox : styles.unselectedCheckbox}>
        {isSelected && <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/463/463612.png' }} style={styles.checkboxIcon} />}
      </View>
    );
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
        <Text style={styles.descriptionText}>ABD:</Text>

        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              selectedButtons.RHA ? styles.selectedButton : styles.unselectedButton,
            ]}
            onPress={() => toggleButton('RHA')}
          >
            <Text
              style={[
                styles.buttonText,
                selectedButtons.RHA ? styles.selectedButtonText : styles.unselectedButtonText,
              ]}
            >
              RHA+
            </Text>
            {renderCheckbox(selectedButtons.RHA)}
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.toggleButton,
              selectedButtons.Plano ? styles.selectedButton : styles.unselectedButton,
            ]}
            onPress={() => toggleButton('Plano')}
          >
            <Text
              style={[
                styles.buttonText,
                selectedButtons.Plano ? styles.selectedButtonText : styles.unselectedButtonText,
              ]}
            >
              Plano
            </Text>
            {renderCheckbox(selectedButtons.Plano)}
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.toggleButton,
              selectedButtons.Semigloboso ? styles.selectedButton : styles.unselectedButton,
            ]}
            onPress={() => toggleButton('Semigloboso')}
          >
            <Text
              style={[
                styles.buttonText,
                selectedButtons.Semigloboso ? styles.selectedButtonText : styles.unselectedButtonText,
              ]}
            >
              Semigloboso
            </Text>
            {renderCheckbox(selectedButtons.Semigloboso)}
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.toggleButton,
              selectedButtons.Globoso ? styles.selectedButton : styles.unselectedButton,
            ]}
            onPress={() => toggleButton('Globoso')}
          >
            <Text
              style={[
                styles.buttonText,
                selectedButtons.Globoso ? styles.selectedButtonText : styles.unselectedButtonText,
              ]}
            >
              Globoso
            </Text>
            {renderCheckbox(selectedButtons.Globoso)}
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.toggleButton,
              selectedButtons.Depressível ? styles.selectedButton : styles.unselectedButton,
            ]}
            onPress={() => toggleButton('Depressível')}
          >
            <Text
              style={[
                styles.buttonText,
                selectedButtons.Depressível ? styles.selectedButtonText : styles.unselectedButtonText,
              ]}
            >
              Depressível
            </Text>
            {renderCheckbox(selectedButtons.Depressível)}
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.toggleButton,
              selectedButtons.SemVMG ? styles.selectedButton : styles.unselectedButton,
            ]}
            onPress={() => toggleButton('SemVMG')}
          >
            <Text
              style={[
                styles.buttonText,
                selectedButtons.SemVMG ? styles.selectedButtonText : styles.unselectedButtonText,
              ]}
            >
              Sem VMG
            </Text>
            {renderCheckbox(selectedButtons.SemVMG)}
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.toggleButton,
              selectedButtons.Alterado ? styles.selectedButton : styles.unselectedButton,
            ]}
            onPress={() => toggleButton('Alterado')}
          >
            <Text
              style={[
                styles.buttonText,
                selectedButtons.Alterado ? styles.selectedButtonText : styles.unselectedButtonText,
              ]}
            >
              Alterado
            </Text>
            {renderCheckbox(selectedButtons.Alterado)}
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.stepText}>Passo 4 | ?</Text>
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
  toggleButton: {
    width: '100%',
    height: 60, 
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedButtonText: {
    color: '#ffffff',
  },
  unselectedButtonText: {
    color: '#1a2c48',
  },
  selectedCheckbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  unselectedCheckbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#1a2c48',
    borderWidth: 2,
    backgroundColor: 'transparent',
  },
  checkboxIcon: {
    width: 16,
    height: 16,
    tintColor: '#1a2c48',
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

export default EvolutionFormABD;
