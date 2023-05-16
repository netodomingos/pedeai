import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import HeaderHome from '../../components/headerHome'
import { Colors } from '../../constants/colors'

export default function Menu() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderHome />
      </ScrollView>
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  }
})