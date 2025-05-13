import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Entrar({ sair }) {
  return (
    <View style={styles.modalView}>
      <Text style={styles.text}>Seja Bem-Vindo!</Text>
      <TouchableOpacity style={styles.button} onPress={sair}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: '#FFF0F5',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
    borderRadius: 20,
    padding: 20,
    elevation: 10,
  },
  text: {
    fontSize: 26,
    color: '#444',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF69B4',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
