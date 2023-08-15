import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

type Personaje = {
  nombre: string;
  descripcion: string;
  imagen: string;
};

type TarjetaProductoProps = {
  character: Personaje;
};

const TarjetaProducto: React.FC<TarjetaProductoProps> = ({ character }) => {
  return (
    <View style={styles.tarjeta}>
      <Image source={{ uri: character.imagen }} style={styles.imagen} />
      <Text style={styles.nombreProducto}>{character.nombre}</Text>
      <Text style={styles.descripcionProducto}>{character.descripcion}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  imagen: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  nombreProducto: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },
  descripcionProducto: {
    marginTop: 5,
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
});

export default TarjetaProducto;
