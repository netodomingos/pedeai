import { View, Image, StyleSheet, useWindowDimensions, Text } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../constants/styles'
import { IHeaderHome } from '../interfaces/IHeaderHome'

export default function HeaderHome({ storeName, time, logo }: IHeaderHome) {
  const { width } = useWindowDimensions()
  
  return (
    <View style={styles.container}>
      <Image 
          source={require('../../assets/images/banner.png')}
          style={[styles.banner,  { width: width }]}
          resizeMode='cover'
        />
        <Image 
          source={{uri: logo}}
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
    maxHeight: 200,
    marginBottom: 10,
  },
  banner: {
    maxHeight: '70%',
  },
  icon: {
    height: 70,
    width: 70,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: Colors.white,
    position: 'absolute',
    top: '48%'
  },
  title: {
    fontFamily: 'SemiBold',
    color: Colors.font,
    fontSize: Fonts.title,
    marginTop: 20,
    textAlign: 'center'
  },
  subTitle: {
    fontFamily: 'Regular',
    color: Colors.font,
    fontSize: Fonts.description,
    textAlign: 'center'
  }
})