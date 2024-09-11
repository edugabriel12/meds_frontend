import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

const MedicalRecordPage = ({ navigation }) => {
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
          <Text style={styles.headerTitle}>Prontuário de Yuri Alberto</Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Estado</Text>
            <View style={styles.patientStatus}>
              <View style={styles.statusDotGreen}></View>
              <Text style={styles.infoValue}>Estável</Text>
            </View>
          </View>
          <View style={styles.underline} />

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Hipótese</Text>
            <Text style={styles.infoValue}>Infecção Respiratória</Text>
          </View>
          <View style={styles.underline} />

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Leito</Text>
            <Text style={styles.infoValue}>7</Text>
          </View>
          <View style={styles.underline} />

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>CID</Text>
            <Text style={styles.infoValue}>J18 - pneumonia por microorganismo não especificada</Text>
          </View>
          <View style={styles.underline} />
        </View>

        <View style={styles.patientsContainer}>
          <View style={styles.patientsHeader}>
            <Text style={styles.sectionTitle}>Evoluções</Text>
            <TouchableOpacity onPress={() => { /* Navegar para lista completa de pacientes */ }}>
              <Text style={styles.seeAllText}>Veja todas</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.patientCard}>
            <View style={styles.patientInfo}>
              <Text style={styles.patientName}>Descrição:</Text>
              <Text style={styles.patientDetails}>
                Paciente responde bem ao tratamento, sem febre nas últimas 24 horas. Além disso, o paciente não se queixa mais de dores.
              </Text>
            </View>
            <View style={styles.patientFooter}>
              <Text style={styles.dateText}>12 Ago</Text>
              <TouchableOpacity>
                <Image
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271228.png' }}
                  style={styles.nextIcon}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.patientCard}>
            <View style={styles.patientInfo}>
              <Text style={styles.patientName}>Descrição:</Text>
              <Text style={styles.patientDetails}>
                Paciente responde bem ao tratamento, sem febre nas últimas 24 horas. Além disso, o paciente não se queixa mais de dores.
              </Text>
            </View>
            <View style={styles.patientFooter}>
              <Text style={styles.dateText}>12 Ago</Text>
              <TouchableOpacity>
                <Image
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271228.png' }}
                  style={styles.nextIcon}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.patientCard}>
            <View style={styles.patientInfo}>
              <Text style={styles.patientName}>Descrição:</Text>
              <Text style={styles.patientDetails}>
                Paciente responde bem ao tratamento, sem febre nas últimas 24 horas. Além disso, o paciente não se queixa mais de dores.
              </Text>
            </View>
            <View style={styles.patientFooter}>
              <Text style={styles.dateText}>12 Ago</Text>
              <TouchableOpacity>
                <Image
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271228.png' }}
                  style={styles.nextIcon}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.patientCard}>
            <View style={styles.patientInfo}>
              <Text style={styles.patientName}>Descrição:</Text>
              <Text style={styles.patientDetails}>
                Paciente responde bem ao tratamento, sem febre nas últimas 24 horas. Além disso, o paciente não se queixa mais de dores.
              </Text>
            </View>
            <View style={styles.patientFooter}>
              <Text style={styles.dateText}>12 Ago</Text>
              <TouchableOpacity>
                <Image
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271228.png' }}
                  style={styles.nextIcon}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.patientCard}>
            <View style={styles.patientInfo}>
              <Text style={styles.patientName}>Descrição:</Text>
              <Text style={styles.patientDetails}>
                Paciente responde bem ao tratamento, sem febre nas últimas 24 horas. Além disso, o paciente não se queixa mais de dores.
              </Text>
            </View>
            <View style={styles.patientFooter}>
              <Text style={styles.dateText}>12 Ago</Text>
              <TouchableOpacity>
                <Image
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271228.png' }}
                  style={styles.nextIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.editPatientButton}>
          <Text style={styles.editPatientButtonText}>Editar Prontuário</Text>
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
  infoContainer: {
    marginTop: 40,
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
  patientsContainer: {
    marginTop: 20,
    marginLeft: 15,
  },
  patientsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  patientCard: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    position: 'relative',
    elevation: 2, // Adds shadow for card effect
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAllText: {
    fontSize: 14,
    color: '#007bff',
  },
  patientName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  patientDetails: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
    lineHeight: 20, // Added lineHeight for better readability
    flexWrap: 'wrap',
  },
  patientFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  dateText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    backgroundColor: '#e6f0ff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  nextIcon: {
    width: 22,
    height: 22,
    tintColor: '#333',
    marginRight: 0, // Adjusted position of the next icon
  },
  underline: {
    height: 1,
    backgroundColor: '#1a2c48',
    marginVertical: 5,
  },
  patientStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  statusDotGreen: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green',
    marginRight: 5,
    marginTop: 6,
  },
  statusText: {
    fontSize: 14,
    color: '#333',
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
});

export default MedicalRecordPage;
