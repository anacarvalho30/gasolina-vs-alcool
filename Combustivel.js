import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Combustivel() {
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    const a = parseFloat(alcool.replace(',', '.'));
    const g = parseFloat(gasolina.replace(',', '.'));
    if (!a || !g) {
      setResultado('Preencha ambos os campos corretamente.');
      return;
    }

    const r = a / g;
    if (r < 0.7) {
      setResultado('Abasteça com Álcool');
    } else {
      setResultado('Abasteça com Gasolina');
    }
  };

  return (
    <View style={styles.box}>
      <Text style={styles.label}>Preço do Álcool:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={alcool}
        onChangeText={setAlcool}
      />

      <Text style={styles.label}>Preço da Gasolina:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={gasolina}
        onChangeText={setGasolina}
      />

      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {resultado !== '' && <Text style={styles.resultado}>{resultado}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginTop: 30,
    width: '100%',
    padding: 20,
    backgroundColor: '#FFF0F5',
    borderRadius: 10,
  },
  label: {
    color: '#444',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#FF69B4',
    marginBottom: 15,
    padding: 8,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#FF69B4',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  resultado: {
    marginTop: 15,
    fontSize: 18,
    color: '#444',
    fontWeight: 'bold',
  },
});
