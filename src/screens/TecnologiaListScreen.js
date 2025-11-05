import React from 'react';
import { FlatList, View } from 'react-native';
import CardNoticia from '../components/CardNoticia';
import noticias from '../data/noticias';

export default function TecnologiaListScreen({ navigation }) {
  const techNews = noticias.filter(n => n.categoria === 'tecnologia');

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={techNews}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <CardNoticia
            titulo={item.titulo}
            resumo={item.resumo}
            onPress={() => navigation.navigate('DetalheTecnologia', { noticia: item })}
          />
        )}
      />
    </View>
  );
}
