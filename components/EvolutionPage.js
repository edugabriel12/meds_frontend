import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

const EvolutionPage = ({ navigation }) => {
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
          <Text style={styles.headerTitle}>Evolução de Yuri Alberto</Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Descrição</Text>
            <Text style={styles.infoValue}>Paciente responde bem ao tratamento, sem febre nas últimas 24 horas. Além disso, o paciente não se queixa mais de dores.</Text>
          </View>
          <View style={styles.underline} />

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Data da Evolução</Text>
            <Text style={styles.infoValue}>19/08/2024</Text>
          </View>
          <View style={styles.underline} />
        </View>

        <View style={styles.configContainer}>
          <Text style={styles.configHeader}>Informações</Text>
          <View style={styles.configRow}>
            <TouchableOpacity style={styles.configButton}>
              <View style={styles.configCircle}>
                <Image
                  source={require("../assets/images/heart-rate.png")}
                  style={styles.configIcon}
                />
              </View>
              <Text style={styles.configText}>Sinais Vitais</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.configButton}>
              <View style={styles.configCircle}>
                <Image
                  source={require("../assets/images/paciente.png")}
                  style={styles.configIcon}
                />
              </View>
              <Text style={styles.configText}>Sintomas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.configButton}>
              <View style={styles.configCircle}>
                <Image
                  source={require("../assets/images/gota-de-agua.png")}
                  style={styles.configIcon}
                />
              </View>
              <Text style={styles.configText}>Balanço</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.configButton}>
              <View style={styles.configCircle}>
                <Image
                  source={require("../assets/images/medical-services.png")}
                  style={styles.configIcon}
                />
              </View>
              <Text style={styles.configText}>Tratamento</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 10,
    minHeight: 90,
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
    flexWrap: 'wrap',
    maxWidth: 80,
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

export default EvolutionPage;
