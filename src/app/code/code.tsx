import { SafeAreaView, StyleSheet, View, ScrollView, KeyboardAvoidingView, useWindowDimensions } from 'react-native'

import Button from '../../components/button'
import Title from '../../components/title'
import SubTitle from '../../components/subtitle'

export default function Code() {
  const { height } = useWindowDimensions()

  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior='padding' style={{height: height, justifyContent: 'center' }}>
          <View style={styles.TextContainer}>
            <Title text='Insira o código de confirmação'/>
            <SubTitle text='O código foi enviado para seu e-mail'/>
          </View>
          <View style={styles.formContainer}>

          </View>
          <View style={styles.ButtonContainer}>
            <Button 
              text='Enviar'
              icon={false}
              onClick={() => {}}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
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