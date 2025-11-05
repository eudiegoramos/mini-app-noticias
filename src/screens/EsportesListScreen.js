import React from 'react';
import { FlatList, View } from 'react-native';
import CardNoticia from '../components/CardNoticia';
import noticias from '../data/noticias';

export default function EsportesListScreen({ navigation }) {
  const esportesNews = noticias.filter(n => n.categoria === 'esportes');

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={esportesNews}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <CardNoticia
            titulo={item.titulo}
            resumo={item.resumo}
            onPress={() => navigation.navigate('DetalheEsportes', { noticia: item })}
          />
        )}
      />
    </View>
  );
}
