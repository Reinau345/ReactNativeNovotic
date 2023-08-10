
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import CustomHeader from '../components/CustomHeader';

type RootStackParamList = {
  CategoriaUno: undefined;
};
type CategoriaUnoProps = NativeStackScreenProps<RootStackParamList, 'CategoriaUno'>;

const CategoriaUno = ({ navigation }: CategoriaUnoProps) => {

  return (

    <>
      <CustomHeader navigation={navigation} title="Máquinas Tragamonedas" />
      <ScrollView>
        <View style={styles.contentnails}>
          <Text>Traga Monedas</Text>
        </View>
      </ScrollView>

    </>

  );

};

export default CategoriaUno;

// **** Estilos CSS ****
const styles = StyleSheet.create({
  contentnails: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});