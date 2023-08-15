import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';
import StackCategories from './StackCategories';
import StackContact from './StackContact';

function HomeScreen() { return (<Home />); }
function StackCategoriesScreen() { return (<StackCategories />); }
function StackContactScreen() { return (<StackContact />); }

const Tab = createBottomTabNavigator();

const StackTabButtom = () => {

  return (

    <Tab.Navigator

      screenOptions={({ route }) => ({

        tabBarActiveTintColor: '#8e8e8e',
        tabBarInactiveTintColor: '#8e8e8e',

        tabBarIcon: ({ color, size, focused }) => {

          let iconName = '';

          if (route.name === 'Inicio') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === 'Catálogo') {
            iconName = focused ? 'book-sharp' : 'book-outline';
          } else if (route.name === 'Contacto') {
            iconName = focused ? 'person-sharp' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >

      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) =>
            <Text style={{
              fontSize: focused ? 12 : 12,
              color: focused ? '#8e8e8e' : '#8e8e8e', // Cambia el color del texto cuando la pestaña está enfocada
            }}>
              Inicio
            </Text>
        }}
      />

      <Tab.Screen name="Catálogo"
        component={StackCategoriesScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) =>
            <Text style={{
              fontSize: focused ? 12 : 12,
              color: focused ? '#8e8e8e' : '#8e8e8e', // Cambia el color del texto cuando la pestaña está enfocada
            }}>
              Catálogo
            </Text>
        }}
      />

      <Tab.Screen
        name="Contacto"
        component={StackContactScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) =>
            <Text style={{
              fontSize: focused ? 12 : 12,
              color: focused ? '#686689' : '#8e8e8e', // Cambia el color del texto cuando la pestaña está enfocada
            }}>
              Contacto
            </Text>
        }}
      />

    </Tab.Navigator>

  );

}

export default StackTabButtom;