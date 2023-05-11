import { Text, StyleSheet } from 'react-native'
import { IText } from '../interfaces/ITexts'
import { Colors } from '../constants/colors';

export default function SubTitle({ text }: IText) {
  return (
    <Text style={styles.text}>{text}</Text>
  )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Regular',
        color: Colors.font,
        fontSize: 14
    }
  });