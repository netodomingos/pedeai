import { SafeAreaView, StyleSheet, View, Image, Platform, StatusBar } from 'react-native'
import { useLogout } from '../../hooks/useAuth'
import { useNavigateBottomTabs } from '../../hooks/useNavigate'
import Title from '../../components/title'
import ButtonProfile from '../../components/buttonProfile'

export default function Profile() {
  const logout = useLogout()
  const navigate = useNavigateBottomTabs()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../../../assets/images/perfilPadrao.png')}
          style={styles.icon}
        />
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
          onClick={() => logout()}
          haveStick={true}
        />
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  icon: {
    borderRadius: 100,
    marginBottom: 5,
    height: 70,
    width: 70
  },
  routesContainer: {
    justifyContent: 'center',
    marginLeft: '5%',
    marginBottom: 50
  },
  ButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})