import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font'

import Toast from 'react-native-toast-message';

import AuthContext, { AuthProvider } from './src/context/tokenContext';

import { Colors } from './src/constants/styles';
import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes from './src/routes/Auth.routes';
import Routes from './src/routes/Routes';

export default function App() {
  const { loading, isLogged } = useContext(AuthContext) 
  const [fontsLoaded] = useFonts({
    'Regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'SemiBold': require('./assets/fonts/Nunito-SemiBold.ttf'),
  });

  if (!fontsLoaded || loading === true) {
    return null;
  } else {
    
    return (
      <AuthProvider>
        <StatusBar style="auto" backgroundColor={Colors.primary}  />
          <NavigationContainer>
            {isLogged === true ? <AuthRoutes /> : <Routes />}
          </NavigationContainer>
        <Toast />
      </AuthProvider>
    );
  }
}