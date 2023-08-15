import React from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import CustomHeaderHome from '../components/CustomHeaderHome';
import Swiper from 'react-native-swiper';


const Home = () => {
  const images = [
    require('../assets/imagenInicio5.jpg'),
    require('../assets/imagenInicio7.jpg'),
    require('../assets/imagenInicio9.jpg'),
  ];

  return (
    <>
      <CustomHeaderHome />
      <ScrollView>
        <View style={styles.contentImageMain}>
          <Swiper showsPagination={false} autoplay={true} autoplayTimeout={4} removeClippedSubviews={false}>
            {images.map((image, index) => (
              <Image key={index} source={image} style={styles.imageMain} />
            ))}
          </Swiper>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>EL N° 1 EN EUROPA</Text>
          <Text style={styles.description}>Con ventas de alrededor de 2.900 millones de euros en 2022, el Grupo NOVOMATIC AG es uno de los grupos de tecnología de juegos más grandes del mundo y el número 1 de Europa en el campo de la tecnología de juegos de alta tecnología</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>SOMOS ANALISTAS</Text>
          <Text style={styles.description}>Somos 300 expertos financieros internacionales de un total de 23.900 empleados que somos responsables en NOVOMATIC de la correcta declaración y tributación de nuestras ventas mundiales en Austria.</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>TECNOLOGÍA GANADORA</Text>
          <Text style={styles.description}>NOVOMATIC impresiona con su fuerza innovadora es el grupo de tecnología de juegos líder en Europa pudo aumentar el valor de su marca a 3.446 millones de euros. Solo Red Bull está por delante del grupo de tecnología de juegos de Baja Austria en el ranking de las mejores marcas del país.  </Text>
        </View>
        <View style={styles.slide}>
          <View style={styles.contentImageMain} >
            <Image style={styles.image}
              source={require('../assets/imagenInicio3.jpg')}/>
          </View>
        </View>
        <View style={styles.slide}>
          <Text style={styles.textt}>NOVOMATIC puntúa en 2023 con el mayor aumento en valor de marca</Text>
        </View>
        <View style={styles.slide}>
          <View style={styles.contentImageMain} >
            <Image style={styles.image}
              source={require('../assets/imagenInicio10.jpg')}/>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  contentImageMain: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '96%',
    marginHorizontal: '2%',
    marginTop: 10,
    aspectRatio: 1 * 1.43, // Convertir pixeles de imágen a "Relación Aspecto" 
  },
  imageMain: {
    width: '100%',
    height: '100%',
    padding: 10,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  text: {
    paddingTop: 10,
    fontSize: 30,
    color: '#666',
    backgroundColor: '#E9EFF5', // Agregamos un color de fondo al cuadro de texto
    padding: 10,
    borderRadius: 5, // Opcional: agrega bordes redondeados al cuadro de texto
    textAlign: 'center',

  },
  textt: {
    paddingTop: 10,
    fontSize: 32,
    color: '#281a4f',
    padding: 10,
    borderRadius: 5, // Opcional: agrega bordes redondeados al cuadro de texto
    textAlign: 'center',

  },


  description: {
    fontSize: 16,
    color: '#666', // Color de texto para la descripción
    backgroundColor: '#E9EFF5', // Agregamos un color de fondo al cuadro de texto
    padding: 20,
    borderRadius: 5,
    textAlign: 'center',
  },
  slide: {
    margin: 15,
    paddingTop: 10,

  },

  image: {
    width: 350, // Ajusta el ancho de la imagen según tus necesidades
    height: 200, // Ajusta el alto de la imagen según tus necesidades
    resizeMode: 'contain', // Ajusta la forma en que la imagen se redimensiona
  },
});

export default Home;
