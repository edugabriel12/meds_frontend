import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

const PatientInfoPage = ({ navigation }) => {
  return (
    <View style={styles.container}> 
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backIconContainer} onPress={() => navigation.goBack()}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/93/93634.png' }}
              style={styles.backIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.profileHeader}>
          <Text style={styles.headerTitle}>Yuri Alberto</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailBadge}>27 anos</Text>
            <Text style={styles.detailBadge}>Homem</Text>
          </View>
        </View>

        {/* New fields for Altura, Peso, Telefone, and Data de Admissão */}
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Altura</Text>
            <Text style={styles.infoValue}>182 cm</Text>
          </View>
          <View style={styles.underline} />

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Peso</Text>
            <Text style={styles.infoValue}>78 kg</Text>
          </View>
          <View style={styles.underline} />

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Telefone</Text>
            <Text style={styles.infoValue}>87 4002-8922</Text>
          </View>
          <View style={styles.underline} />

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Data de Admissão</Text>
            <Text style={styles.infoValue}>19/08/2024</Text>
          </View>
          <View style={styles.underline} />
        </View>

        <View style={styles.configContainer}>
          <Text style={styles.configHeader}>Ações</Text>
          <View style={styles.configRow}>
            <TouchableOpacity style={styles.configButton}>
              <View style={styles.configCircle}>
                <Image
                  source={require('../images/prontuario-medico.png')}
                  style={styles.configIcon}
                />
              </View>
              <Text style={styles.configText}>Acessar Prontuário</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.configButton}>
              <View style={styles.configCircle}>
                <Image
                  source={require('../images/stethoscope.png')}
                  style={styles.configIcon}
                />
              </View>
              <Text style={styles.configText}>Adicionar Evolução</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.configButton}>
              <View style={styles.configCircle}>
                <Image
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png' }}
                  style={styles.configIcon}
                />
              </View>
              <Text style={styles.configText}>Perfil Completo</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.configRow}>
            <TouchableOpacity style={styles.configButton}>
              <View style={styles.configCircle}>
                <Image
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/685/685655.png' }}
                  style={styles.configIcon}
                />
              </View>
              <Text style={styles.configText}>Anexar Imagens</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.configButton}>
              <View style={styles.configCircle}>
                <Image
                  source={require('../images/galeria-de-imagens.png')}
                  style={styles.configIcon}
                />
              </View>
              <Text style={styles.configText}>Galeria de Imagens</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.configButton}>
              <View style={styles.configCircle}>
                <Image
                  source={require('../images/x.png')}
                  style={styles.configIcon}
                />
              </View>
              <Text style={styles.configText}>Deletar Paciente</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.editPatientButton}>
          <Text style={styles.editPatientButtonText}>Editar Detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  profileHeader: {
    alignItems: 'center',
    marginTop: 70,
    marginBottom: -20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a2c48',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  detailBadge: {
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginHorizontal: 5,
    fontSize: 16,
    color: '#1a2c48',
  },
  infoContainer: {
    marginTop: 60,
    paddingHorizontal: 15,
  },
  infoRow: {
    flexDirection: 'column',
    paddingVertical: 13,
  },
  infoLabel: {
    fontSize: 16,
    color: '#1a2c48',
  },
  infoValue: {
    fontSize: 16,
    color: '#1a2c48',
    marginTop: 5,
  },
  underline: {
    height: 1,
    backgroundColor: '#1a2c48',
    marginVertical: 5,
  },
  configContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
    marginLeft: -5,
  },
  configHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 25,
  },
  configRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center', 
  },
  configButton: {
    alignItems: 'center',
    marginHorizontal: 0,
    flex: 1,
  },
  configCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  configIcon: {
    width: 20,
    height: 20,
    tintColor: '#030303',
  },
  configText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
  editPatientButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#003366',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    paddingHorizontal: 20,
    minWidth: 380,
  },
  editPatientButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
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
});

export default PatientInfoPage;
