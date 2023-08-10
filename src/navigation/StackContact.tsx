import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contacto from '../screens/Contacto';

const Stack = createNativeStackNavigator();

const StackContact = () => {

  return (

    <Stack.Navigator>
      
      <Stack.Screen
        name="Catalogo"
        component={Contacto as React.ComponentType<any>}
        options={{ headerShown: false, }}
      />

    </Stack.Navigator>

  );

};

export default StackContact;