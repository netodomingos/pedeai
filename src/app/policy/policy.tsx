import { Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../components/header'

import { policy } from '../../constants/terms_and_policys'
import { Colors } from '../../constants/colors'
import { useNavigateBottomTabs } from '../../hooks/useNavigate'

export default function Policy() {
  const navigate = useNavigateBottomTabs()
  
  return (
    <>
      <Header onClick={() => navigate('Perfil')} />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>{policy.title}</Text>
          <Text style={styles.date}>Data da última atualização: {policy.last_update}</Text>
          <Text style={styles.content}>{policy.content}</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
  },
  date: {
    marginTop: 20,
    textAlign: 'left',
    fontSize: 14,
    fontFamily: 'Regular',
    color: Colors.font
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Regular',
    color: Colors.font
  },
  content: {
    textAlign: 'left',
    fontSize: 14,
    fontFamily: 'Regular',
    color: Colors.font
  }
})
