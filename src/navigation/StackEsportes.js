import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EsportesListScreen from '../screens/EsportesListScreen';
import EsportesDetailScreen from '../screens/EsportesDetailScreen';

const Stack = createNativeStackNavigator();

export default function StackEsportes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListaEsportes" component={EsportesListScreen} options={{ title: 'Esportes' }} />
      <Stack.Screen name="DetalheEsportes" component={EsportesDetailScreen} />
    </Stack.Navigator>
  );
}
