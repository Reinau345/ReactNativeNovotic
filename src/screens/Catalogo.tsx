import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import CustomHeader from '../components/CustomHeader';

type RootStackParamList = {
  Catalogo: undefined;
};



type CatalogoProps = NativeStackScreenProps<RootStackParamList, 'Catalogo'>;

type Maquina = {
  _id:string;
  imagen: string;
  nombre: string;
  estado: string;
  referencia: string;
  descripcion: string;
};

const Catalogo = ({ navigation }: CatalogoProps) => {
  const initialUrl = 'https://novoticp1.onrender.com/api/producto/obtenerProducto';
 
  const [searchTerm, setSearchTerm] = useState('');
  const [allCharacters, setAllCharacters] = useState<Maquina[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<Maquina[]>([]);
  

  useEffect(() => {
    fetch(initialUrl)
      .then(response => response.json())
      .then(data => {
        setAllCharacters(data);
        filterCharacters(data, searchTerm); // Filtra los datos una vez cargados
      })
      .catch(error => console.log(error));
  }, []);

  const filterCharacters = (characters: Maquina[], query: string) => {
    const filtered = characters.filter(character =>
      Object.values(character).some(value =>
        value.toString().toLowerCase().includes(query.toLowerCase().trim())
        
      ) &&
      character.estado.toLowerCase() === 'activo'
    );
    setFilteredCharacters(filtered); // Actualiza el estado con los datos filtrados
  };

  const handleSearchTermChange = (text: string) => {
    setSearchTerm(text);
    filterCharacters(allCharacters, text); // Filtra los datos almacenados en allCharacters
  };
  
  

  return (
    <>
    
      <CustomHeader navigation={navigation} title="Catálogo" />
      <View style={styles.contentContainerR}>
      <View style={[styles.searchContainer, ]}>
        <TextInput
         placeholder="Buscar Máquina"
         style={[styles.searchInput]}
         placeholderTextColor="#ccc" // Aquí puedes establecer el color gris que desees
         value={searchTerm}
         onChangeText={handleSearchTermChange}
        />
        <TouchableOpacity style={styles.searchIconContainer} onPress={() => filterCharacters(allCharacters, searchTerm)}>
          <Ionicons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
      </View>
      <ScrollView>
      <ScrollView>
  <View style={styles.contentContainer}>
    {filteredCharacters.length === 0 ? (
      <Text style={styles.noResultsText}>No se encuentraron resultados</Text>
    ) : (
      filteredCharacters.map((character, index) => (
        <View key={index} style={styles.cardContainer}>
          <Image source={{ uri: `https://novoticp1.onrender.com/api/producto/obtener-imagen-producto/${character._id}` }} style={styles.cardImage} />
          <Text style={styles.cardText}>{character.nombre}</Text>
          {/* <Text style={styles.cardDescription}> Estado: {character.estado}</Text> */}
          <Text style={styles.cardDescription}> Referencia: {character.referencia}</Text>
          <Text style={styles.cardDescription}>  {character.descripcion}</Text>
        </View>
      ))
    )}
  </View>
</ScrollView>

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
    textAlign: 'justify',
    //alignItems: 'center',
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
    padding: 20,
    textAlign: 'justify'
  },
  cardDescription: {
    fontSize: 16,
    color: '#666',
    padding: 20,
    textAlign: 'justify',
  },
  searchContainer: {
    flexDirection: 'row',
    //alignItems: 'center',
   
  },
  contentContainerR: {
    padding: 10,
     backgroundColor: '#ffffff',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 2,
    borderColor: '#aea9a9',
    borderRadius: 20,
    padding: 10,
    color: '#000',
  },
  searchIconContainer: {
    backgroundColor: '#a5a3a3',
    borderRadius: 20,
    marginLeft: 9,
    padding: 9,
    
  },
  noResultsText: {
    fontSize: 13,
    color: '#868585',
    textAlign: 'center',
    marginTop: 4, // Espacio superior para separar del contenido anterior
  },
});

export default Catalogo;
