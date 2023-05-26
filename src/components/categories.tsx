import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { memo } from 'react'
import { Colors, Fonts } from '../constants/styles'

type ICategories = {
    title: string,
    onClick: () => void,
    focus: boolean
}

function Categories({ title, focus, onClick }: ICategories) {
  return (
    <TouchableOpacity style={[styles.container, focus === true && styles.focusContainer]} onPress={onClick}>
      <Text style={[styles.title, focus === true && styles.focusText]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default memo(Categories)

const styles = StyleSheet.create({
    container: {
        borderWidth: 1.3,
        height: 35,
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderRadius: 8,
        marginHorizontal: 10,
        marginTop: 10,
        borderColor: Colors.primary
    },
    title: {
        fontFamily: 'SemiBold',
        color: Colors.primary,
        fontSize: Fonts.subTitle
    },
    focusContainer: {
        backgroundColor: Colors.primary
    },
    focusText: {
        color: Colors.white
    }
})