import { Platform, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Colors } from '../constants/styles';
import { IButton } from '../interfaces/IButton';

export default function Header({onClick}: IButton) {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.buttonBack} onPress={onClick}>
            <Feather name="arrow-left" size={30} color={Colors.primary} />    
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        borderBottomWidth: 1.5,
        borderBottomColor: Colors.disabled,
        paddingHorizontal: 5,
    },
    buttonBack: {
        width: 40,
        paddingVertical: 3
    }
  });