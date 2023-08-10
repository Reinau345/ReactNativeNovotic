import React from 'react';
import { Text, View } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Contacto: undefined; 
};

type ContactoProps = NativeStackScreenProps<RootStackParamList, 'Contacto'>;

const Contacto = ({ navigation }: ContactoProps) => {

  return (

    <>
      <CustomHeader  navigation={navigation}  title={"Contacto"} />

      <View>
        <Text>Contacto</Text>
      </View>
    </>

  );

}

export default Contacto;