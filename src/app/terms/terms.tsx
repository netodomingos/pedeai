import { Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../components/header'

import { terms } from '../../constants/terms_and_policys'
import { Colors } from '../../constants/colors'
import { useNavigateBottomTabs } from '../../hooks/useNavigate'

export default function Terms() {
 const navigate = useNavigateBottomTabs()

  return (
    <>
      <Header onClick={() => navigate('Perfil')} />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>{terms.title}</Text>
          <Text style={styles.subTitle}>{terms.subTitle}</Text>
          <Text style={styles.content}>{terms.content}</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
  },
  subTitle: {
    marginTop: 20,
    textAlign: 'left',
    fontSize: 14,
    fontFamily: 'SemiBold',
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
