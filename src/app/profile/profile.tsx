import { SafeAreaView, StyleSheet, View, Image, Platform, StatusBar, ImageBackground } from 'react-native'
import { useLogout } from '../../hooks/useAuth'

import { useNavigateBottomTabs } from '../../hooks/useNavigate'

import Title from '../../components/title'
import ButtonProfile from '../../components/buttonProfile'
import { Colors } from '../../constants/styles'
import Toast from 'react-native-toast-message'

export default function Profile() {
  const logout = useLogout()
  const navigate = useNavigateBottomTabs()

  function handleLogOut(){
    logout()
    Toast.show({
      type: 'sucess',
      text1: 'VocÇe foi deslogado com sucesso!',
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.insideContainer}>
        <View style={styles.imageContainer}>
          <ImageBackground 
            source={require('../../../assets/images/perfilPadrao.png')} 
            resizeMode="contain" 
            style={styles.backgroundIcon}
          >
            <Image 
              source={require('../../../assets/images/quadroPerfil.png')}
              style={styles.icon}
            />
          </ImageBackground>
          <Title text='email@email.com' />
        </View>
        <View style={styles.routesContainer}>
          <ButtonProfile 
            icon='clipboard-text-outline'
            title='Termos e condições'
            onClick={() => navigate("Terms")}
          />
          <ButtonProfile 
            icon='shield-alert-outline'
            title='Política de privacidade'
            onClick={() => navigate("Policy")}
            haveStick={true}
          />
        </View>
        <View style={styles.routesContainer}>
          <ButtonProfile 
            icon='exit-to-app'
            title='Sair'
            onClick={() => handleLogOut()}
            haveStick={true}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  insideContainer: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: '2%',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  icon: {
    height: 70,
    width: 70
  },
  backgroundIcon: {
    height: 69,
    width: 69,
    justifyContent: 'center',
    alignItems: 'center',
  },
  routesContainer: {
    justifyContent: 'center',
    marginBottom: 50
  },
  ButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})