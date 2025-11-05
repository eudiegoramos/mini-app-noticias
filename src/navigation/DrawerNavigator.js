import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import SobreScreen from '../screens/SobreScreen';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: '#007AFF',
      }}
    >
      <Drawer.Screen
        name="Notícias"
        component={TabNavigator}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="newspaper-outline" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Sobre"
        component={SobreScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="information-circle-outline" size={size} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
}
