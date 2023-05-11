import { SafeAreaView, StyleSheet, View, Image } from 'react-native'
import Button from '../../components/button'
import Title from '../../components/title'
import SubTitle from '../../components/subtitle'

export default function Email() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TextContainer}>
        <Title text='Insira seu e-mail'/>
        <SubTitle text='Enviaremos um código de confirmação'/>
      </View>
      <View style={styles.formContainer}>
       
      </View>
      <View style={styles.ButtonContainer}>
        <Button 
          text='Solicitar código'
          icon={false}
          onClick={() => {}}
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
  formContainer: {
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