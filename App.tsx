import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font'

import Toast from 'react-native-toast-message';

import { AuthProvider } from './src/context/tokenContext';

import Index from './index';
import { Colors } from './src/constants/colors';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'SemiBold': require('./assets/fonts/Nunito-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <AuthProvider>
        <StatusBar style="auto" backgroundColor={Colors.primary}  />
        <Index />
        <Toast />
      </AuthProvider>
    );
  }
}