import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import CustomHeader from '../components/CustomHeader';
import TarjetaProducto from '../components/TarjetaProducto';

type Personaje = {
  nombre: string;
  descripcion: string;
  imagen: string;
};

type RootStackParamList = {
  CategoriaDos: undefined;
};

type CategoriaDosProps = NativeStackScreenProps<RootStackParamList, 'CategoriaDos'>;

const CategoriaDos = ({ navigation }: CategoriaDosProps) => {
  const initialUrl = "https://rickandmortyapi.com/api/character";

  const [Characters, setCharacters] = useState<Personaje[]>([]);

  useEffect(() => {
    fetch(initialUrl)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.log(error))
  }, []);

  return (
    <>
      <CustomHeader navigation={navigation} title="Gabinetes electrónicos" />
      <ScrollView>
        <View style={styles.contentnails}>
          {Characters.map((character, index) => (
            <TarjetaProducto key={index} character={character} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  contentnails: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default CategoriaDos;
