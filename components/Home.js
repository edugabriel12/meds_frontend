import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.menuIconContainer} onPress={() => { /* Abrir menu */ }}>
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828859.png' }}
                            style={styles.menuIcon}
                        />
                    </TouchableOpacity>
                    <Image source={require('../images/doctor.png')} style={styles.icon} />
                    <Text style={styles.headerTitle}>Meds</Text>
                    <Image
                        source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
                        style={styles.profileIcon}
                    />
                </View>

                <View style={styles.searchContainer}>
                    <TextInput
                        placeholder="Procure por um paciente"
                        style={styles.searchInput}
                        placeholderTextColor="#a9a9a9"
                    />
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/49/49116.png' }}
                        style={styles.searchIcon}
                    />
                </View>

                <View style={styles.actionsContainer}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Image
                            source={require('../images/stethoscope.png')}
                            style={styles.actionIcon}
                        />
                        <Text style={styles.actionText}>Nova Evolução</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Image
                            source={require('../images/patient.png')}
                            style={styles.actionIcon}
                        />
                        <Text style={styles.actionText}>Novo Paciente</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/685/685655.png' }}
                            style={styles.actionIcon}
                        />
                        <Text style={styles.actionText}>Anexar Imagens</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.patientsContainer}>
                    <View style={styles.patientsHeader}>
                        <Text style={styles.sectionTitle}>Seus pacientes</Text>
                        <TouchableOpacity onPress={() => { /* Navegar para lista completa de pacientes */ }}>
                            <Text style={styles.seeAllText}>Veja todos</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.patientCard}>
                        <View style={styles.patientInfo}>
                            <Text style={styles.patientName}>Yuri Alberto</Text>
                            <Text style={styles.patientDetails}>Diagnóstico: I10 - Hipertensão</Text>
                            <Text style={styles.patientDetails}>Leito: 7</Text>
                            <View style={styles.patientStatus}>
                                <View style={styles.statusDotGreen}></View>
                                <Text style={styles.statusText}>Estável</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Image
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271228.png' }}
                                style={styles.nextIcon}
                            />
                        </TouchableOpacity>
                        <View style={styles.patientDate}>
                            <Text style={styles.dateText}>12 Ago</Text>
                        </View>
                    </View>

                    <View style={styles.patientCard}>
                        <View style={styles.patientInfo}>
                            <Text style={styles.patientName}>Talles Magno</Text>
                            <Text style={styles.patientDetails}>Diagnóstico: E10 - Diabetes</Text>
                            <Text style={styles.patientDetails}>Leito: 10</Text>
                            <View style={styles.patientStatus}>
                                <View style={styles.statusDotRed}></View>
                                <Text style={styles.statusText}>Crítico</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Image
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271228.png' }}
                                style={styles.nextIcon}
                            />
                        </TouchableOpacity>
                        <View style={styles.patientDate}>
                            <Text style={styles.dateText}>11 Ago</Text>
                        </View>
                    </View>

                    <View style={styles.patientCard}>
                        <View style={styles.patientInfo}>
                            <Text style={styles.patientName}>Rodrigo Garro</Text>
                            <Text style={styles.patientDetails}>Diagnóstico: I10 - Hipertensão</Text>
                            <Text style={styles.patientDetails}>Leito: 11</Text>
                            <View style={styles.patientStatus}>
                                <View style={styles.statusDotYellow}></View>
                                <Text style={styles.statusText}>Alerta</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Image
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271228.png' }}
                                style={styles.nextIcon}
                            />
                        </TouchableOpacity>
                        <View style={styles.patientDate}>
                            <Text style={styles.dateText}>10 Ago</Text>
                        </View>
                    </View>

                    <View style={styles.patientCard}>
                        <View style={styles.patientInfo}>
                            <Text style={styles.patientName}>Róger Guedes</Text>
                            <Text style={styles.patientDetails}>Diagnóstico: I10 - Hipertensão</Text>
                            <Text style={styles.patientDetails}>Leito: 09</Text>
                            <View style={styles.patientStatus}>
                                <View style={styles.statusDotYellow}></View>
                                <Text style={styles.statusText}>Alerta</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Image
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271228.png' }}
                                style={styles.nextIcon}
                            />
                        </TouchableOpacity>
                        <View style={styles.patientDate}>
                            <Text style={styles.dateText}>09 Ago</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.bottomNav}>
                <TouchableOpacity style={[styles.navButton, styles.navButtonActive]}>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1946/1946436.png' }}
                        style={styles.navIcon}
                    />
                    <Text style={styles.navText}>Início</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton}>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png' }}
                        style={styles.navIcon}
                    />
                    <Text style={styles.navText}>Perfil</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollContainer: {
        paddingHorizontal: 20,
        paddingBottom: 80,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        backgroundColor: '#003366',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
        height: 80
    },
    menuIconContainer: {
        position: 'absolute',
        left: 20,
    },
    menuIcon: {
        width: 24,
        height: 24,
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
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 15,
        marginTop: 110,
    },
    searchInput: {
        flex: 1,
        height: 50,
        fontSize: 16,
        color: '#333',
    },
    searchIcon: {
        width: 24,
        height: 24,
        tintColor: '#a9a9a9',
    },
    icon: {
        width: 28,
        height: 28,
        marginRight: 8,
        resizeMode: 'contain',
        overflow: 'hidden',
        tintColor: '#fff',
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    actionButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginHorizontal: 5,
        height: 100,
    },
    actionIcon: {
        width: 36,
        height: 36,
        marginBottom: 10,
        tintColor: '#007bff',
    },
    actionText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    patientsContainer: {
        marginTop: 20,
    },
    patientsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
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
    patientCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        position: 'relative',
    },
    nextIcon: {
        width: 22,
        height: 22,
        tintColor: '#333',
        marginRight: 20,
        marginBottom: 17,
      },
    patientInfo: {
        flex: 1,
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
    },
    statusDotRed: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'red',
        marginRight: 5,
    },
    statusDotYellow: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'yellow',
        marginRight: 5,
    },
    statusText: {
        fontSize: 14,
        color: '#333',
    },
    patientDate: {
        position: 'absolute',
        right: 60,
        bottom: 0,
        transform: [{ translateY: -10 }],
        marginRight: -40,
        marginBottom: 4,
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
    navButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    navButtonActive: {
        backgroundColor: '#ffffff',
        padding: 10,
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 12,
    },
    
    navIcon: {
        width: 24,
        height: 24,
        marginBottom: 5,
        tintColor: '#003366',
    },
    
    navText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#003366',
    },
});

export default HomeScreen;
