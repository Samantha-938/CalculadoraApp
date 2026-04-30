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

// 🟡 Pantalla de operación
function OperacionScreen({ route }) {
  const { tipo } = route.params;

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    let res = 0;

    switch (tipo) {
      case 'suma':
        res = a + b;
        break;
      case 'resta':
        res = a - b;
        break;
      case 'multiplicacion':
        res = a * b;
        break;
      case 'division':
        res = b !== 0 ? a / b : 'Error';
        break;
    }

    setResultado(res);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{tipo.toUpperCase()}</Text>

      <TextInput
        style={styles.input}
        placeholder="Número 1"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        style={styles.input}
        placeholder="Número 2"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {resultado !== null && (
        <Text style={styles.result}>Resultado: {resultado}</Text>
      )}
    </View>
  );
}

// 🔵 Navegación
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Operacion" component={OperacionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// 🎨 Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    marginVertical: 8,
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    width: '80%',
    marginVertical: 10,
    padding: 10,
    borderRadius: 8,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});