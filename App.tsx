import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/Routes';

import { useFonts } from 'expo-font'
import Toast from 'react-native-toast-message';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'SemiBold': require('./assets/fonts/Nunito-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
      <Toast />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
