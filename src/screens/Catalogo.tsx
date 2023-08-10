import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TouchableOpacity, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomHeader from '../components/CustomHeader';

type RootStackParamList = {
  Catalogo: undefined;
  CategoriaUno: undefined;
  CategoriaDos: undefined;
  CategoriaTres: undefined;
  CategoriaCuatro: undefined;
};
type CatalogoProps = NativeStackScreenProps<RootStackParamList, 'Catalogo'>;

const Catalogo = ({ navigation }: CatalogoProps) => {
  return (

    // "contentContainerStyle" en contenedor "ScrollView" con "flexGrow: 1" solucionan errores de Scroll
    <>
      <CustomHeader navigation={navigation} title="Catálogo" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.contentCatalog}>
          <View style={styles.catalog}>

            <TouchableOpacity style={styles.contentCategory} onPress={() => navigation.navigate('CategoriaUno')}>
              <View style={styles.contentIconCatalogo1}>
                <Ionicons style={styles.iconCatalogo} name="hand-left-outline" />
              </View>
              <Text style={styles.textCategory}>Máquinas tragamonedas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.contentCategory} onPress={() => navigation.navigate('CategoriaDos')}>
              <View style={styles.contentIconCatalogo2}>
                <Ionicons style={styles.iconCatalogo} name="planet-outline" />
              </View>
              <Text style={styles.textCategory}>Gabinetes electrónicos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.contentCategory} onPress={() => navigation.navigate('CategoriaTres')}>
              <View style={styles.contentIconCatalogo3}>
                <Ionicons style={styles.iconCatalogo} name="gift-outline" />
              </View>
              <Text style={styles.textCategory}>Terminales de apuestas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.contentCategory} onPress={() => navigation.navigate('CategoriaCuatro')}>
              <View style={styles.contentIconCatalogo4}>
                <Ionicons style={styles.iconCatalogo} name="beer-outline" />
              </View>
              <Text style={styles.textCategory}>Máquinas expendedoras</Text>
            </TouchableOpacity>
            
          </View>

        </View>

      </ScrollView>

    </>

  );

};

export default Catalogo;

// **** Estilos CSS ****
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
  },
  contentImgCatalogo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    aspectRatio: 1 * 1.67, // Convertir pixeles de imágen a "Relación Aspecto" 
    backgroundColor: '#00000000',
  },
  imgCatalogo: {
    width: '90%',
    height: '90%',
    resizeMode: 'cover',
    borderRadius: 15,
  },
  contentCatalog: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00000000',
  },
  catalog: {
    flexDirection: 'row', // Posisiona elementos en fila
    flexWrap: 'wrap', // Posiciona elementos horixontalmente en varias filas
    justifyContent: 'center',
    backgroundColor: '#00000000',
  },
  contentCategory: {
    width: 110,
    alignItems: 'center',
    marginHorizontal: 6,
    marginVertical: 40,
  },
  textCategory: {
    fontFamily: 'Futura PT Medium',
    color: '#7e7e7e',
    fontSize: 16,
    marginTop: 10,
    fontWeight: '500',
    textAlign: 'center',
  },
  contentIconCatalogo1: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#d7c6f7',
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 15,
  },
  contentIconCatalogo2: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#b7fadf',
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 15,
  },
  contentIconCatalogo3: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fed2e5',
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 15,
  },
  contentIconCatalogo4: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#c3e8ff',
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 15,
  },
  contentIconCatalogo5: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fffec2',
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 15,
  },
  contentIconCatalogo6: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#ffc4b7',
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 15,
  },
  iconCatalogo: {
    fontSize: 35,
    color: '#5e5e5e',
  },
});