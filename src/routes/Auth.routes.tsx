import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Colors } from '../constants/colors';

import Menu from '../app/menu/menu';
import Profile from '../app/profile/profile';

const Tab = createBottomTabNavigator();

export default function AuthRoutes(){
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName: any = ""
          if (route.name === 'Menu') {
              iconName = focused
              ? 'storefront'
              : 'storefront-outline';
            } else if (route.name === 'Perfil') {
              iconName = focused
              ? 'account'
              : 'account-outline';
            }
              return <MaterialCommunityIcons name={iconName} size={30} color={ focused ? Colors.white : Colors.disabled } />
          },
          tabBarLabelStyle: {
            fontFamily: "SemiBold",
            fontSize: 16
          },
          tabBarActiveTintColor: Colors.white,
          tabBarInactiveTintColor: Colors.disabled,
          tabBarStyle: {
            backgroundColor: Colors.primary,
            display: route.name === 'Welcome' ? 'none' : 'flex'
          },
        })
      }
    >
      <Tab.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
      <Tab.Screen name="Perfil" component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}