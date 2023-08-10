import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import CustomHeaderHome from '../components/CustomHeaderHome';
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';


const { width } = Dimensions.get('window');

const Home = () => {
  return (
    <>
      <CustomHeaderHome />
      <ScrollView>
        <View style={styles.container}>
          <Swiper style={styles.swiper}
            autoplay={true} // Activa el carrusel automático
            autoplayTimeout={3} // Establece el tiempo de duración entre transiciones en segundos (3 segundos en este caso)
            loop={true} // Activa el desplazamiento infinito del carrusel
            dotStyle={styles.dot}
            activeDotStyle={styles.activeDot}
            showsButtons={true} // Muestra las flechas de navegación
            prevButton={<Ionicons name="chevron-back" size={32} color="#8c8989" />}
            nextButton={<Ionicons name="chevron-forward" size={32} color="#8c8989" />}
          >

            <View style={styles.slide}>
              {/* Primera tarjeta */}
              <Image
                source={require('../assets/imagenInicio3.jpg')}
                style={[styles.image, { width }]} // Hacemos que el ancho de la imagen sea igual al ancho de la pantalla
              />
              <Text style={styles.text}>Información de la primera tarjeta</Text>
              <Text style={styles.description}>Ya está todo listo para disfrutar de Peru Gaming Show (PGS)
                2023 del 14 al 15 de junio en el Jockey Exposition Center en Lima; y NOVOMATIC estará
                presente con sus productos más destacados y sus últimos lanzamientos: gabinetes con emocionantes progresivos, potentes ETGs, el sistema de gestión de casino</Text>
            </View>
            <View style={styles.slide}>
              {/* Segunda tarjeta */}
              <Image
                source={require('../assets/imagenInicio4.jpg')}
                style={[styles.image, { width }]} // Hacemos que el ancho de la imagen sea igual al ancho de la pantalla
              />
              <Text style={styles.text}>Información de la segunda tarjeta</Text>
              <Text style={styles.description}>Ya está todo listo para disfrutar de Peru Gaming Show (PGS)
                2023 del 14 al 15 de junio en el Jockey Exposition Center en Lima; y NOVOMATIC estará
                presente con sus productos más destacados y sus últimos lanzamientos: gabinetes con emocionantes progresivos, potentes ETGs, el sistema de gestión de casino</Text>
            </View>
            <View style={styles.slide}>
              {/* Segunda tarjeta */}
              <Image
                source={require('../assets/imagenInicio4.jpg')}
                style={[styles.image, { width }]} // Hacemos que el ancho de la imagen sea igual al ancho de la pantalla
              />
              <Text style={styles.text}>Información de la segunda tarjeta</Text>
              <Text style={styles.description}>Ya está todo listo para disfrutar de Peru Gaming Show (PGS)
                2023 del 14 al 15 de junio en el Jockey Exposition Center en Lima; y NOVOMATIC estará
                presente con sus productos más destacados y sus últimos lanzamientos: gabinetes con emocionantes progresivos, potentes ETGs, el sistema de gestión de casino</Text>
            </View>
            {/* Agrega más tarjetas aquí si es necesario */}
          </Swiper>
          <View>
            <Image
              source={require('../assets/imagenInicio3.jpg')}
            // Hacemos que el ancho de la imagen sea igual al ancho de la pantalla
            />
            <Image
              source={require('../assets/imagenInicio3.jpg')}
            // Hacemos que el ancho de la imagen sea igual al ancho de la pantalla
            />
          </View>
        </View>
      </ScrollView>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  swiper: {},
  slide: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 30,
    color: '#666',
    backgroundColor: '#E9EFF5', // Agregamos un color de fondo al cuadro de texto
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
  dot: {
    backgroundColor: 'rgba(27, 14, 69, 0.2)', // Estilo para los círculos que NO son el círculo activo
    width: 8,
    height: 8,
    borderRadius: 4,

  },
  activeDot: {
    backgroundColor: '#5c96ff', // Estilo para el círculo activo (el círculo que indica la posición actual del carrusel)
    width: 12,
    height: 12,
    borderRadius: 6,

  },
  backIcon: {
    color: '#fdfdfd',
    borderRadius: 34,
    fontSize: 30,
    backgroundColor: '#c7c6c2'


  },
});


export default Home;