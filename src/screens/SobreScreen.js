import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function SobreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />
      <Text style={styles.titulo}>Mini App de Notícias</Text>
      <Text style={styles.descricao}>
        Este aplicativo foi desenvolvido como exercício de navegação usando React Native e Expo.
      </Text>
      <Button title="Voltar" onPress={() => navigation.navigate('Notícias')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  image: { width: 100, height: 100, marginBottom: 20 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  descricao: { textAlign: 'center', fontSize: 16, marginBottom: 20 },
});
