import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type RootStackParamList = {
  Contacto: undefined;
};

type ContactoProps = NativeStackScreenProps<RootStackParamList, 'Contacto'>;

const Contacto = ({ navigation }: ContactoProps) => {



  return (
    <>
      <CustomHeader navigation={navigation} title={"Contacto"} />
      <View style={styles.containerContact}>

        <View style={styles.contentContact}>

          <View style={styles.contentContactOption}>
            <View style={styles.contactOption}>
              <Ionicons style={styles.contactOptionIcon} name="location" />
              <View style={styles.contentTitleText}>
                <Text style={styles.titleContactOption}>NUESTRA SEDE</Text>
                <Text style={styles.textContactOption}>Carrera 64C # 88 - 16</Text>
                <Text style={styles.textContactOption}>Barrio Laureles</Text>
                <Text style={styles.textContactOption}>MEDELLÍN</Text>
              </View>
            </View>
          </View>

          <View style={styles.contentContactOption}>
            <View style={styles.contactOption}>
              <Ionicons style={styles.contactOptionIcon} name="call-sharp" />
              <View style={styles.contentTitleText}>
                <Text style={styles.titleContactOption}>TELÉFONO{'\n'}DE CONTACTO</Text>
                <Text style={styles.textContactOption}>604-4212500</Text>
                <Text style={styles.textContactOption}>+57 3117795670</Text>
              </View>
            </View>
          </View>

          <View style={styles.contentContactOption}>
            <View style={styles.contactOption}>
              <Ionicons style={styles.contactOptionIcon} name="logo-whatsapp" />
              <View style={styles.contentTitleText}>
                <Text style={styles.titleContactOption}>WHATSAPP</Text>
                <Text style={styles.textContactOption}>+57 3117795670</Text>
              </View>
            </View>
          </View>

          <View style={styles.contentContactOption}>
            <View style={styles.contactOption}>
              <Ionicons style={styles.contactOptionIcon} name="mail" />
              <View style={styles.contentTitleText}>
                <Text style={styles.titleContactOption}>CORREO{'\n'}ELECTRÓNICO</Text>
                <Text style={styles.textContactOption}>Novomatic@gmail.com</Text>
              </View>
            </View>
          </View>

        </View>

      </View >
    </>
  );
};

const styles = StyleSheet.create({
  containerContact: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#E5E5E5'
  },
  contentContact: {
    flexDirection: 'row', // Posisiona elementos en fila
    flexWrap: 'wrap', // Posiciona elementos horixontalmente en varias filas
    alignItems: 'center',
  },
  contentContactOption: {
    width: '100%',
    height: 120,
    justifyContent: 'center',
    marginVertical: 10,
    backgroundColor: '#ffffff',
  },
  contactOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  contactOptionIcon: {
    marginLeft: 30,
    color: '#a5a0d8',
    fontSize: 50,
  },
  contentTitleText: {
    width: 200,
    marginVertical: 10,
    marginRight: 20,
  },
  titleContactOption: {
    marginTop: 5,
    marginBottom: 12,
    fontSize: 15,
    color: '#3b3b3b',
    textAlign: 'center',
    fontWeight: '700',
  },
  textContactOption: {
    marginBottom: 2,
    textAlign: 'center',
    color: '#3b3b3b',
    fontSize: 14,
  },
});

export default Contacto;
