import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../app/welcome/welcome';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Welcome" 
        component={Welcome} 
        options={{
            headerShown: false
        }}
    />
    </Stack.Navigator>
  );
}