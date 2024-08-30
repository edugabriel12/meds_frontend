import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

const ProfileScreen = ({ navigation }) => {
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
                </View>

                <View style={styles.profileContainer}>
                    <Image
                        source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
                        style={styles.profileImage}
                    />
                    <Text style={styles.profileName}>Eduardo Gabriel</Text>
                    <Text style={styles.profileSpecialty}>Cardiologista</Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statCard}>
                        <View style={styles.statCardHeaderPatients}>
                            <Text style={styles.statCardTitle}>Pacientes</Text>
                            <Image
                                source={require('../images/patient.png')}
                                style={styles.statCardIcon}
                            />
                        </View>
                        <Text style={styles.statCardCount}>6</Text>
                    </View>
                    <View style={styles.statCard}>
                        <View style={styles.statCardHeaderPlan}>
                            <Text style={styles.statCardTitle}>Plano</Text>
                            <Image
                                source={require('../images/black-star-silhouette.png')}
                                style={styles.statCardIcon}
                            />
                        </View>
                        <Text style={styles.statCardPlan}>Gratuito</Text>
                    </View>
                </View>

                <View style={styles.configContainer}>
                    <Text style={styles.configHeader}>Configurações</Text>
                    <View style={styles.configRow}>
                        <TouchableOpacity style={styles.configButton}>
                            <View style={styles.configPremiumCircle}>
                                <Image
                                    source={require('../images/black-star-silhouette.png')}
                                    style={styles.configPremiumIcon}
                                />
                            </View>
                            <Text style={styles.configText}>Seja Premium</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.configButton}>
                            <View style={styles.configCircle}>
                                <Image
                                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png' }}
                                    style={styles.configIcon}
                                />
                            </View>
                            <Text style={styles.configText}>Alterar Dados de Perfil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.configButton}>
                            <View style={styles.configCircle}>
                                <Image
                                    source={require('../images/cadeado-trancado.png')}
                                    style={styles.configIcon}
                                />
                            </View>
                            <Text style={styles.configText}>Alterar Senha</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.configRow}>
                        <TouchableOpacity style={styles.configButton}>
                            <View style={styles.configCircle}>
                                <Image
                                    source={require('../images/packard-bell.png')}
                                    style={styles.configIcon}
                                />
                            </View>
                            <Text style={styles.configText}>Notificações</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.configButton}>
                            <View style={styles.configCircle}>
                                <Image
                                    source={require('../images/documento.png')}
                                    style={styles.configIcon}
                                />
                            </View>
                            <Text style={styles.configText}>Termos e Condições</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.configButton}>
                            <View style={styles.configCircle}>
                                <Image
                                    source={require('../images/x.png')}
                                    style={styles.configIcon}
                                />
                            </View>
                            <Text style={styles.configText}>Deletar Perfil</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.bottomNav}>
                <TouchableOpacity  style={styles.navButton}>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1946/1946436.png' }}
                        style={styles.navIcon}
                    />
                    <Text style={styles.navText}>Início</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navButton, styles.navButtonActive]}>
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
        paddingBottom: 100,
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
    icon: {
        width: 28,
        height: 28,
        marginRight: 8,
        resizeMode: 'contain',
        overflow: 'hidden',
        tintColor: '#fff',
    },
    profileContainer: {
        marginTop: 120,
        alignItems: 'center',
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    profileName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10,
    },
    profileSpecialty: {
        fontSize: 18,
        color: '#777',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    statCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        width: 160,
        height: 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
      },
      statCardHeaderPatients: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 3,
      },
      statCardHeaderPlan: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 30,
      },
      statCardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1a2c48',
      },
      statCardIcon: {
        width: 30,
        height: 30,
        tintColor: '#1a2c48',
      },
      statCardCount: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#003366',
        marginTop: 5,
        marginRight: 100,
      },
      statCardPlan: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#003366',
        marginBottom: 10,
        marginRight: 71,
      },
    configContainer: {
        marginTop: 30,
        paddingHorizontal: 20,
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
    },
    configButton: {
        alignItems: 'center',
        marginHorizontal: 10,
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
    configPremiumCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#030303',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    configPremiumIcon: {
        width: 20,
        height: 20,
        tintColor: '#fff',
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

export default ProfileScreen;
