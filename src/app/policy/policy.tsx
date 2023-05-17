import { Text, SafeAreaView, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native'
import React from 'react'
import Header from '../../components/header'

import { policy } from '../../constants/terms_and_policys'
import { Colors, Fonts } from '../../constants/styles'
import { useNavigateBottomTabs } from '../../hooks/useNavigate'

export default function Policy() {
  const navigate = useNavigateBottomTabs()
  const { height } = useWindowDimensions()
  
  return (
    <SafeAreaView style={styles.container}>
      <Header onClick={() => navigate('Perfil')} />
      <View style={styles.insideContainer}>
        <ScrollView style={{ height: height - 60 }}>
          <Text style={styles.title}>{policy.title}</Text>
          <Text style={styles.date}>Data da última atualização: {policy.last_update}</Text>
          <Text style={styles.content}>{policy.content}</Text>
        </ScrollView>
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
    marginHorizontal: 8,
  },
  date: {
    marginTop: 20,
    textAlign: 'left',
    fontSize: Fonts.subTitle,
    fontFamily: 'Regular',
    color: Colors.font
  },
  title: {
    textAlign: 'center',
    fontSize: Fonts.title,
    fontFamily: 'Regular',
    color: Colors.font
  },
  content: {
    textAlign: 'left',
    fontSize: Fonts.description,
    fontFamily: 'Regular',
    color: Colors.font
  }
})
