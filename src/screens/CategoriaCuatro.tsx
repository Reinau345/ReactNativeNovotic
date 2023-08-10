
import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomHeader from '../components/CustomHeader';

type RootStackParamList = {
  CategoriaCuatro: undefined;
};
type CategoriaCuatroProps = NativeStackScreenProps<RootStackParamList, 'CategoriaCuatro'>;

const CategoriaCuatro = ({ navigation }: CategoriaCuatroProps) => {

  return (

    <>
      <CustomHeader navigation={navigation} title="Máquinas expendedoras" />
      <View style={styles.contentnails}></View>
    </>

  );

};

export default CategoriaCuatro;

// **** Estilos CSS ****
const styles = StyleSheet.create({
  contentnails: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});