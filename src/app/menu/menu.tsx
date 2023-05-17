import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import HeaderHome from '../../components/headerHome'
import { Colors } from '../../constants/styles'

export default function Menu() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderHome storeName='Loja do pede.ai' time='50 - 60 min.'/>
      </ScrollView>
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})