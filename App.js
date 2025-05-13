import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';

import Entrar from './Entrar';
import Combustivel from './Combustivel';

export default function App() {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/736x/a3/6c/76/a36c7683bb31aa543c9ea12f17f931f9.jpg',
      }}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />

      <ScrollView contentContainerStyle={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.title}>🌸Menu Principal🌸</Text>

          <TouchableOpacity style={styles.button} onPress={() => setVisibleModal(true)}>
            <Text style={styles.buttonText}> Entrar </Text>
          </TouchableOpacity>

          <Modal
            transparent={true}
            visible={visibleModal}
            animationType="fade"
            onRequestClose={() => setVisibleModal(false)}
          >
            <Entrar sair={() => setVisibleModal(false)} />
          </Modal>

          <Combustivel />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.3)', 
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 30,
    padding: 30,
    width: '100%',
    maxWidth: 350,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
    borderWidth: 2,
    borderColor: '#FFB6C1', 
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#5C3A42',
    marginBottom: 30,
    textAlign: 'center',
    fontFamily: 'serif',
  },
  button: {
    backgroundColor: '#FF69B4',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginBottom: 30,
    shadowColor: '#222',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#FFDAB9', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    textShadowColor: '#333',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});
