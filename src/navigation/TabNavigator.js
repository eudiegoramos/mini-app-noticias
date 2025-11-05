import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackTecnologia from './StackTecnologia';
import StackEsportes from './StackEsportes';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Tecnologia') iconName = 'laptop-outline';
          else if (route.name === 'Esportes') iconName = 'football-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Tecnologia" component={StackTecnologia} />
      <Tab.Screen name="Esportes" component={StackEsportes} />
    </Tab.Navigator>
  );
}
