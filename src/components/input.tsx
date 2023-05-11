import { View, Text, TextInput, StyleSheet, useWindowDimensions } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import { IInput } from '../interfaces/IInput';


export default function Input({ value, onChange, placeholder, error }: IInput) {
	const { width } = useWindowDimensions()
  return (
    <View style={styles.container}>
      <Feather name="mail" size={24} color={error !== '' ? Colors.primary : Colors.font} />
			<View style={styles.insideContainer}> 
				<TextInput 
					style={[styles.input, { width: width - 80, borderBottomColor: error !== '' ? Colors.primary : Colors.font}]}
					value={value}
					onChangeText={text => onChange(text)}
					placeholder={placeholder}
					keyboardType='email-address'
				/>
				{ error !== '' && <Text style={styles.errorText}>{error}</Text> }
			</View>
    </View>
  )
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center'
	},
	insideContainer: {
		flexDirection: 'column',
		alignItems: 'flex-end'
	},
	input: {
		borderBottomWidth: 0.5,
		height: 30,
		fontFamily: 'Regular',
		fontSize: 16,
		marginLeft: 10
	},
	errorText: {
		fontFamily: 'Regular',
		fontSize: 14,
		color: Colors.primary
	},
})
