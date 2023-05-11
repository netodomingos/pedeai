import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../app/welcome/welcome';
import Email from '../app/email/email';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
      <Stack.Screen name="Email" component={Email} />
    </Stack.Navigator>
  );
}