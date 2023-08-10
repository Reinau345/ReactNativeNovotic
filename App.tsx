// import 'react-native-gesture-handler'; 
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackTabButtom from './src/navigation/StackTabButtom';



const App = () => {

  return (

    <NavigationContainer>
      <StackTabButtom />
    </NavigationContainer>

  );

};

export default App;

const styles = StyleSheet.create({

});
