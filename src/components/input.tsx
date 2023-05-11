import { View, Text, TextInput, StyleSheet, useWindowDimensions } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import { IInput } from '../interfaces/IInput';
import { handleValidEmail } from '../utils/EmailValid';
import { useState } from 'react';


export default function Input({ value, onChange, placeholder }: IInput) {
	const { width } = useWindowDimensions()
	const [error, setError] = useState(false)

	function verifyEmail(text: string){
		const response = handleValidEmail(text)
		setError(response)
	}

  return (
    <View style={styles.container}>
      <Feather name="mail" size={24} color={error === true ? Colors.primary : Colors.font} />
			<View style={styles.insideContainer}> 
				<TextInput 
					style={[styles.input, { width: width - 80, borderBottomColor: error === true ? Colors.primary : Colors.font}]}
					value={value}
					onChangeText={text => {
						onChange(text)
						verifyEmail(text)
					}}
					placeholder={placeholder}
					autoFocus
					keyboardType='email-address'
				/>
				{ error === true  && <Text style={styles.errorText}>Formato de e-mail inválido</Text> }
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
		height: 28,
		fontFamily: 'Regular',
		fontSize: 16,
		marginLeft: 10
	},
	errorText: {
		fontFamily: 'Regular',
		fontSize: 14,
		color: Colors.primary,
		marginTop: 5
	},
})
