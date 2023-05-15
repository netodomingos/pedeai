import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { IButtonProfile } from '../interfaces/IButton'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';

export default function buttonProfile({ icon, title, haveStick, onClick}: IButtonProfile) {
  return (
    <>
        <TouchableOpacity style={styles.container} onPress={onClick}>
        <View style={styles.insideContainer}>
            <MaterialCommunityIcons name={icon} size={24} color={Colors.font} />
            <Text style={styles.title}>{title}</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color={Colors.font} />
        </TouchableOpacity>
        {haveStick && <View style={styles.stick} />}
    </>
  )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        paddingVertical: 10,
    },
    insideContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'SemiBold',
        fontSize: 16,
        color: Colors.font,
        marginLeft: 5
    },
    stick: {
        borderBottomWidth: 0.2,
        borderBottomColor: Colors.disabled,
        marginHorizontal: 10,
    }
  })