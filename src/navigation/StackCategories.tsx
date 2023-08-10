import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriaUno from '../screens/CategoriaUno';
import CategoriaDos from '../screens/CategoriaDos';
import CategoriaTres from '../screens/CategoriaTres';
import CategoriaCuatro from '../screens/CategoriaCuatro';
import Catalogo from '../screens/Catalogo';

const Stack = createNativeStackNavigator();

const StackCategories = () => {

  return (

    <Stack.Navigator>
      
      <Stack.Screen
        name="Catalogo"
        component={Catalogo as React.ComponentType<any>}
        options={{ headerShown: false, }}
      />

      <Stack.Screen
        name="CategoriaUno"
        component={CategoriaUno as React.ComponentType<any>}
        options={{ headerShown: false, }}
      />

      <Stack.Screen
        name="CategoriaDos"
        component={CategoriaDos as React.ComponentType<any>}
        options={{ headerShown: false, }}
      />

      <Stack.Screen
        name="CategoriaTres"
        component={CategoriaTres as React.ComponentType<any>}
        options={{ headerShown: false, }}
      />

      <Stack.Screen
        name="CategoriaCuatro"
        component={CategoriaCuatro as React.ComponentType<any>}
        options={{ headerShown: false, }}
      />

    </Stack.Navigator>

  );

};

export default StackCategories;