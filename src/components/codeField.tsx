import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

import {
  CodeField as CodeFieldComponent,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { Colors, Fonts } from '../constants/styles';
import { ICodeField } from '../interfaces/ICodeFiled';


const CELL_COUNT = 6;

export default function CodeField({code, onChange, error}: ICodeField){
  const [value, setValue] = useState(code);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={styles.root}>
      <CodeFieldComponent
        ref={ref}
        {...props}
        value={value}
        onChangeText={(text) => {
            setValue(text)
            onChange(text)
        }}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFiledRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[{ borderColor: error ? Colors.primary : '#00000030', }, styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      {error && <Text style={styles.errorText}>Código informado incorreto</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    root: {padding: 20},
    title: {textAlign: 'center', fontSize: 30},
    codeFiledRoot: {marginTop: 20},
    cell: {
        width: 40,
        height: 55,
        borderRadius: 8,
        lineHeight: 50,
        marginHorizontal: 3,
        fontSize: Fonts.cell,
        borderWidth: 2,
        textAlign: 'center',
        fontFamily: 'SemiBold'
    },
    focusCell: {
        borderColor: Colors.font,
    },
    errorText: {
        fontFamily: 'Regular',
		fontSize: Fonts.subTitle,
		color: Colors.primary,
		marginTop: 5,
        textAlign: 'center'
    }
})

