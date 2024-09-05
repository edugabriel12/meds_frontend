import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView, Modal } from 'react-native';

const PatientGallery = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      source: { uri: 'https://pocus.fob.usp.br/wp-content/uploads/sites/994/2022/12/Captura-de-Tela-2022-12-01-as-11.43.25.png' },
      title: 'Ultrassom do pulmão',
      date: '12/08/2024',
    },
    {
      id: 2,
      source: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVFF5-cM3zEGTlukVeuRWXrVSX2VuT6eC_mQ&s' },
      title: 'Raio-x do pulmão',
      date: '12/08/2024',
    },
    {
      id: 3,
      source: { uri: 'https://clinicatirol.com.br/wp-content/uploads/2020/05/Tomografia-do-t%C3%B3rax-de-paciente-com-Covid-19-300x239.jpg' },
      title: 'Tomografia do pulmão',
      date: '12/08/2024',
    },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backIconContainer} onPress={() => navigation.goBack()}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/93/93634.png' }}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Galeria do Paciente</Text>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
            style={styles.profileIcon}
          />
        </View>

        <View style={styles.galleryContainer}>
          {images.map((image) => (
            <TouchableOpacity key={image.id} onPress={() => openModal(image)}>
              <View style={styles.imageCard}>
                <Image source={image.source} style={styles.image} />
                <Text style={styles.imageTitle}>{image.title}</Text>
                <Text style={styles.imageDate}>Data da Imagem: {image.date}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.addPatientButton}>
          <Text style={styles.addPatientButtonText}>Anexar Imagens</Text>
        </TouchableOpacity>
      </View>

      {selectedImage && (
        <Modal visible={isModalVisible} transparent={true}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.modalCloseButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Image source={selectedImage.source} style={styles.fullImage} />
          </View>
        </Modal>
      )}
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
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
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    position: 'absolute',
    right: 20,
  },
  galleryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 100,
  },
  imageCard: {
    width: width / 2 - 30,
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: width / 2 - 40,
    height: width / 2 - 40,
    borderRadius: 10,
  },
  imageTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#333',
  },
  imageDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: width,
    borderTopWidth: 2,
    borderTopColor: '#B0B0B0',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
  },
  addPatientButton: {
    width: '90%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#003366',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPatientButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalCloseButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  fullImage: {
    width: width - 40,
    height: width - 40,
    borderRadius: 10,
  },
});

export default PatientGallery;
