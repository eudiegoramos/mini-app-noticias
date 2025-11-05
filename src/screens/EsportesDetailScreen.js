import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function EsportesDetailScreen({ route, navigation }) {
  const { noticia } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ title: noticia.titulo });
  }, [navigation, noticia]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>{noticia.titulo}</Text>
      <Text style={styles.conteudo}>{noticia.conteudo}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  conteudo: { fontSize: 16, lineHeight: 24 },
});
