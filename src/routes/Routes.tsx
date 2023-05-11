import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../app/welcome/welcome';
import Email from '../app/email/email';
import { Colors } from '../constants/colors';
import BackButton from '../components/backButton';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerLeft: () => (<BackButton />),
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'SemiBold',
        },
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
      <Stack.Screen name="Email" component={Email} />
      <Stack.Screen name="Code" component={Email} />
    </Stack.Navigator>
  );
}