import { SafeAreaView, StyleSheet, View, Image } from 'react-native'
import Button from '../../components/button'
import Title from '../../components/title'
import SubTitle from '../../components/subtitle'

export default function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../../../assets/images/welcome.png')}
        />
      </View>
      <View style={styles.TextContainer}>
        <Title text='Bem vindo ao pede.ai'/>
        <SubTitle text='Faça login para conferir nossas ofertas'/>
      </View>
      <View style={styles.ButtonContainer}>
        <Button 
          text='Entrar com e-mail'
          icon={true}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },
  TextContainer: {
    justifyContent: 'center',
    marginLeft: '5%',
    marginBottom: 50
  },
  ButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})