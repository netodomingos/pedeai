import { createStackNavigator } from '@react-navigation/stack';

import { Colors } from '../constants/styles';

import BackButton from '../components/backButton';

import Welcome from '../app/welcome/welcome';
import Email from '../app/email/email';
import Code from '../app/code/code';
import AuthRoutes from './Auth.routes';

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
      <Stack.Screen name="Email" component={Email} options={{ title: 'Entrar com E-mail' }}/>
      <Stack.Screen name="Code" component={Code} options={{ title: 'Verificação de E-mail' }} />
      <Stack.Screen name="AuthRoutes" component={AuthRoutes} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

