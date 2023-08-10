import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomHeaderHome = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.containerCustomHeader}>
            <Image source={require('../assets/logo2.png')} style={styles.logo} />
        </View>
    );
}

export default CustomHeaderHome;

const styles = StyleSheet.create({
    containerCustomHeader: {
        display: 'flex',
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#032770',
    },
    logo: {
        width: 140,
        height: 60,
    },
});