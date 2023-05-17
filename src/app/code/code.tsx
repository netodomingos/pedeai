import { SafeAreaView, StyleSheet, View, ScrollView, KeyboardAvoidingView, useWindowDimensions } from 'react-native'

import Button from '../../components/button'
import Title from '../../components/title'
import SubTitle from '../../components/subtitle'
import CodeField from '../../components/codeField'
import { useState } from 'react'
import { IRoute } from '../../interfaces/IRoute'
import { useLogin } from '../../hooks/useAuth'
import { Colors } from '../../constants/styles'


export default function Code({ route }: IRoute) {
  const { height } = useWindowDimensions()
  const handlelogin = useLogin()
  const [code, setCode] = useState('')
  const [error, setError] = useState(false)
  
  const token = route.params?.token  
  const token_date = route.params?.token_date

  async function handleVerifyCode(){
    if(code === token){
      await handlelogin(token, token_date)
    } else {
      setError(true)
    }
  }

  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior='padding' style={{height: height, justifyContent: 'center' }}>
          <View style={styles.TextContainer}>
            <Title text='Insira o código de confirmação'/>
            <SubTitle text='O código foi enviado para seu e-mail'/>
          </View>
          <View style={styles.formContainer}>
            <CodeField 
              code={code}
              onChange={(text: string) => setCode(text)}
              error={error}
            />
          </View>
          <View style={styles.ButtonContainer}>
            <Button 
              text='Enviar'
              icon={false}
              disabled={code.length < 6}
              onClick={() => handleVerifyCode()}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: Colors.white
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