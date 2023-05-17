import { Text, SafeAreaView, ScrollView, StyleSheet, useWindowDimensions, Platform, StatusBar, View } from 'react-native'
import React from 'react'
import Header from '../../components/header'

import { terms } from '../../constants/terms_and_policys'
import { Colors, Fonts } from '../../constants/styles'
import { useNavigateBottomTabs } from '../../hooks/useNavigate'

export default function Terms() {
 const navigate = useNavigateBottomTabs()
 const { height } = useWindowDimensions()

  return (
    <SafeAreaView style={styles.container}>
      <Header onClick={() => navigate('Perfil')} />
      <View style={styles.insideContainer}>
          <ScrollView style={{ height: height - 60 }}>
            <Text style={styles.title}>{terms.title}</Text>
            <Text style={styles.subTitle}>{terms.subTitle}</Text>
            <Text style={styles.content}>{terms.content}</Text>
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
  subTitle: {
    marginTop: 20,
    textAlign: 'left',
    fontSize: Fonts.subTitle,
    fontFamily: 'SemiBold',
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
