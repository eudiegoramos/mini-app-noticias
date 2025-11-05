import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export default function CardNoticia({ titulo, resumo, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.resumo}>{resumo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { padding: 15, marginVertical: 8, backgroundColor: '#f2f2f2', borderRadius: 8 },
  titulo: { fontWeight: 'bold', fontSize: 16 },
  resumo: { color: '#555', marginTop: 5 },
});
