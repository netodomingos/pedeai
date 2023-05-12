import { SafeAreaView, StyleSheet, View, ScrollView, KeyboardAvoidingView, useWindowDimensions } from 'react-native'
import { useEffect, useState } from 'react'

import Button from '../../components/button'
import Title from '../../components/title'
import SubTitle from '../../components/subtitle'
import Input from '../../components/input'

import { handleValidEmail } from '../../utils/EmailValid'
import { useSendToken } from '../../hooks/useSendToken'
import navigation from '../../hooks/useNavigate'

export default function Email() {
  const [email, setEmail] = useState('')
  const { height } = useWindowDimensions()
  const navigate = navigation()
  const { loading, result, verifyEmail } =  useSendToken(email)  

  
  async function handleSendEmail(){
    await verifyEmail()
  }
  
  function handleVerifyResult(){
    navigate('Code', {
      token: result?.token
    })
  }

  useEffect(() => {
    result !== undefined && handleVerifyResult()
  }, [result])
  
  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior='padding' style={{height: height, justifyContent: 'center' }}>
          <View style={styles.TextContainer}>
            <Title text='Insira seu e-mail'/>
            <SubTitle text='Enviaremos um código de confirmação'/>
          </View>
          <View style={styles.formContainer}>
          <Input 
            value={email}
            onChange={(text: string) => setEmail(text)}
            placeholder=''
          />
          </View>
          <View style={styles.ButtonContainer}>
            <Button 
              text='Solicitar código'
              icon={false}
              onClick={() => handleSendEmail()}
              disabled={handleValidEmail(email)}
              loading={loading}
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