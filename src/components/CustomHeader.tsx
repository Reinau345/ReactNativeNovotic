import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface CustomHeaderProps {
  title: string;
  navigation: {
    goBack: () => void;
    navigate: (screen: string) => void;
  };
}

const CustomHeader = ({ navigation, title }: CustomHeaderProps) => {

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.containerCustomHeader}>
      <TouchableOpacity style={styles.containerBackIcon} onPress={handleGoBack}>
        <Ionicons style={styles.backIcon} name="arrow-back-outline" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}

export default CustomHeader;

const styles = StyleSheet.create({
  containerCustomHeader: {
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    backgroundColor: '#032770',
    shadowColor: '#ffffff',
    elevation: 5,
    marginBottom: 3,
  },
  containerBackIcon: {
    display: 'flex',
    position: 'absolute',
    top: 14,
    left: 16,
    padding: 10,
    zIndex: 1,
  },
  backIcon: {
    color: '#fffbf4',
    fontSize: 24,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    color: '#fffbf4',
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0.4,
  },
});