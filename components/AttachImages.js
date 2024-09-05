import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { launchImageLibrary } from 'react-native-image-picker';

const AttachImages = ({ navigation }) => {
  const [selectedPatient, setSelectedPatient] = useState();
  const [images, setImages] = useState([]);

  const pickImage = async () => {
    if (images.length >= 6) {
      alert('Você só pode anexar até 6 imagens.');
      return;
    }

    const options = {
      mediaType: 'photo',
      selectionLimit: 1,
    };

    
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const uri = response.assets[0].uri;
        setImages([...images, uri]);
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backIconContainer} onPress={() => navigation.goBack()}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/93/93634.png' }}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Anexar Imagens</Text>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
          style={styles.profileIcon}
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Paciente *</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedPatient}
            onValueChange={(itemValue) => setSelectedPatient(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="01 - Yuri Alberto" value="yuri_alberto" />
            <Picker.Item label="02 - João Silva" value="joao_silva" />
            <Picker.Item label="03 - Maria Souza" value="maria_souza" />
          </Picker>
        </View>

        <Text style={styles.label}>Descrição da Imagem *</Text>
        <TextInput
          placeholder="Digite uma descrição"
          style={styles.textInputField}
          placeholderTextColor="#a9a9a9"
          multiline
        />

        <Text style={styles.label}>Data da Imagem *</Text>
        <TextInput
            placeholder="dd/mm/yy"
            style={styles.inputField}
            placeholderTextColor="#a9a9a9"
        />

        <Text style={styles.label}>Imagens *</Text>
        <TouchableOpacity style={styles.imageUploadButton} onPress={pickImage}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828926.png' }} style={styles.uploadIcon} />
          <Text style={styles.uploadText}>Clique para anexar</Text>
        </TouchableOpacity>

        <View style={styles.imagePreviewContainer}>
          {images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.imagePreview} />
          ))}
        </View>

        <TouchableOpacity style={styles.addPatientButton}>
          <Text style={styles.addPatientButtonText}>Finalizar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 15,
    height: 80,
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
    paddingTop: 100,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a2c48',
    marginBottom: 10,
  },
  pickerContainer: {
    width: '100%',
    height: 50,
    marginBottom: 25,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
  },
  picker: {
    width: '100%',
    height: '100%',
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
  textInputField: {
    width: '100%',
    height: 100,
    marginBottom: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#f0f0f0',
    textAlignVertical: 'top',
  },
  imageUploadButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingVertical: 15,
    marginBottom: 20,
  },
  uploadIcon: {
    width: 24,
    height: 24,
    tintColor: '#1a2c48',
    marginRight: 10,
  },
  uploadText: {
    fontSize: 16,
    color: '#1a2c48',
  },
  imagePreviewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imagePreview: {
    width: width / 3 - 20,
    height: width / 3 - 20,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  addPatientButton: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#1a2c48',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  addPatientButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AttachImages;
