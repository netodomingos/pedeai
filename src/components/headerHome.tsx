import { View, Image, StyleSheet, useWindowDimensions, Text } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../constants/styles'
import { IHeaderHome } from '../interfaces/IHeaderHome'

export default function HeaderHome({ storeName, time }: IHeaderHome) {
  const { width } = useWindowDimensions()
  return (
    <View style={styles.container}>
      <Image 
          source={require('../../assets/images/banner.png')}
          style={[styles.banner,  { width: width }]}
          resizeMode='cover'
        />
        <Image 
          source={require('../../assets/images/logo.png')}
          style={styles.icon}
          resizeMode='cover'
        />
        <Text style={styles.title}>{storeName}</Text>
        <Text style={styles.subTitle}>{time}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  banner: {
    maxHeight: '30%',
  },
  icon: {
    height: 70,
    width: 70,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: Colors.white,
    position: 'absolute',
    top: '20%'
  },
  title: {
    fontFamily: 'SemiBold',
    color: Colors.font,
    fontSize: Fonts.title,
    marginTop: 15,
    textAlign: 'center'
  },
  subTitle: {
    fontFamily: 'Regular',
    color: Colors.font,
    fontSize: Fonts.description,
    textAlign: 'center'
  }
})