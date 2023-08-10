
import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomHeader from '../components/CustomHeader';

type RootStackParamList = {
  CategoriaDos: undefined;
};
type CategoriaDosProps = NativeStackScreenProps<RootStackParamList, 'CategoriaDos'>;

const CategoriaDos = ({ navigation }: CategoriaDosProps) => {

  return (

    <>
      <CustomHeader navigation={navigation} title="Gabinetes electrónicos" />
      <View style={styles.contentnails}></View>
    </>

  );

};

export default CategoriaDos;

// **** Estilos CSS ****
const styles = StyleSheet.create({
  contentnails: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});