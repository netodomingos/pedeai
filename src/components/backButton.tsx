import { TouchableOpacity, StyleSheet } from 'react-native'
import { IButton } from '../interfaces/IButton'
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../constants/styles';
import { useNavigation } from '@react-navigation/native';

export default function BackButton() {
  const { goBack } = useNavigation();  
  return (
    <TouchableOpacity style={styles.backButton} onPress={() => goBack()}>
        <MaterialIcons name="keyboard-arrow-left" size={30} color={Colors.white} />
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    backButton: {
        paddingHorizontal: 10
    }
})
