import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

const PatientPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backIconContainer} onPress={() => { /* Abrir menu */ }}>
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/93/93634.png' }}
                            style={styles.backIcon}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Todos os seus pacientes</Text>
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

                <View style={styles.patientsContainer}>
                    <View style={styles.patientsHeader}>
                        <TouchableOpacity onPress={() => { /* Navegar para lista completa de pacientes */ }}>
                            <Text style={styles.seeAllText}>Página 1/2</Text>
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

                <View style={styles.paginationContainer}>
                    <TouchableOpacity style={styles.pageButton}>
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271220.png' }}
                            style={styles.previousPageIcon}
                        />
                        <Text style={styles.previousPageText}>Página anterior</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.pageButton}>
                        <Text style={styles.nextPageText}>Próxima página</Text>
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271228.png' }}
                            style={styles.nextPageIcon}
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.addPatientButton}>
                    <Text style={styles.addPatientButtonText}>Adicionar Paciente</Text>  
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
        height: 80
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
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 15,
        marginTop: 100,
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
    patientsContainer: {
        marginTop: 20,
    },
    patientsHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    seeAllText: {
        fontSize: 16,
        color: '#333',
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
    addPatientButton: {
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
    addPatientButtonText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
      },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    pageButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nextPageIcon: {
        width: 22,
        height: 22,
        tintColor: '#333',
        marginRight: -20,
    },
    previousPageIcon: {
        width: 22,
        height: 22,
        tintColor: '#333',
        marginLeft: -20,
    },
    nextPageText: {
        fontSize: 16,
        color: '#333',
        marginRight: 5,
    },
    previousPageText: {
        fontSize: 16,
        color: '#333',
        marginLeft: 5,
    },
});

export default PatientPage;
