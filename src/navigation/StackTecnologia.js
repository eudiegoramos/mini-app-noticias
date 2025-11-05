import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TecnologiaListScreen from '../screens/TecnologiaListScreen';
import TecnologiaDetailScreen from '../screens/TecnologiaDetailScreen';

const Stack = createNativeStackNavigator();

export default function StackTecnologia() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListaTecnologia" component={TecnologiaListScreen} options={{ title: 'Tecnologia' }} />
      <Stack.Screen name="DetalheTecnologia" component={TecnologiaDetailScreen} />
    </Stack.Navigator>
  );
}
