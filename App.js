import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// 🟢 Pantalla principal
function HomeScreen({ navigation }) {
  const opciones = [
    { nombre: 'Suma', tipo: 'suma' },
    { nombre: 'Resta', tipo: 'resta' },
    { nombre: 'Multiplicación', tipo: 'multiplicacion' },
    { nombre: 'División', tipo: 'division' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Operaciones</Text>

      {opciones.map((op, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => navigation.navigate('Operacion', { tipo: op.tipo })}
        >
          <Text style={styles.buttonText}>{op.nombre}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}