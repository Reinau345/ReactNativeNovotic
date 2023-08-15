import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import CustomHeader from '../components/CustomHeader';

type RootStackParamList = {
  CategoriaUno: undefined;
};
type CategoriaUnoProps = NativeStackScreenProps<RootStackParamList, 'CategoriaUno'>;

type Personaje = {
  name: string;
  image: string;
  species:string;
  location: {
    name: string;
  };
};

const CategoriaUno = ({ navigation }: CategoriaUnoProps) => {

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
      <CustomHeader navigation={navigation} title="Máquinas Tragamonedas" />
      <ScrollView>
        <View style={styles.contentContainer}>
          {Characters.map((character, index) => (
            <View key={index} style={styles.cardContainer}>
              <Image source={{ uri: character.image }} style={styles.cardImage} />
              <Text style={styles.cardText}>{character.name}</Text>
              <Text style={styles.cardDescription}> Species:{character.species}</Text>
              <Text style={styles.cardDescription}> location:{character.location.name}
                
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E9EFF5',
    borderRadius: 5,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  cardText: {
    fontSize: 24,
    color: '#666',
    padding: 10,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 16,
    color: '#666',
    padding: 20,
    textAlign: 'center',
  },
});

export default CategoriaUno;
