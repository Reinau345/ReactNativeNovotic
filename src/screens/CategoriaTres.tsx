
import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomHeader from '../components/CustomHeader';

type RootStackParamList = {
  CategoriaTres: undefined;
};
type CategoriaTresProps = NativeStackScreenProps<RootStackParamList, 'CategoriaTres'>;

const CategoriaTres = ({ navigation }: CategoriaTresProps) => {

  return (

    <>
      <CustomHeader navigation={navigation} title="Terminales de apuestas" />
      <View style={styles.contentnails}></View>
    </>

  );

};

export default CategoriaTres;

// **** Estilos CSS ****
const styles = StyleSheet.create({
  contentnails: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});