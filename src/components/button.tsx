import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { IButton } from '../interfaces/IButton'
import { Colors, Fonts } from '../constants/styles';
import { Feather } from '@expo/vector-icons';

export default function Button({ text, disabled, icon, loading, onClick }: IButton) {
  return (
    <TouchableOpacity disabled={disabled} style={[styles.button, { backgroundColor: disabled || loading ? Colors.disabled : Colors.primary }]} onPress={onClick}>
        {loading ? (
                <ActivityIndicator color={Colors.white} size={24} />
            ) : (
                <>
                    {icon && <Feather name="mail" size={24} color={Colors.white} style={styles.icon} />}<Text style={styles.text}>{text}</Text>
                </>

            )
        }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
      width: '90%',
      paddingVertical: 14,
      borderRadius: 8,
      textAlign: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    text: {
      fontFamily: 'SemiBold',
      color: Colors.white,
      fontSize: Fonts.title
    },
    icon: {
      marginRight: 10
    }
  });