import { StyleSheet, View, Text, Image, useWindowDimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../constants/styles'
import { Itens } from '../interfaces/IStore'


type Item = {
    title: string,
    itens: Array<Itens>
}

export default function ItensComponent({ title, itens }: Item) {
  const { width } = useWindowDimensions()	
  return (
    <View style={[styles.container, { width: width }]}>
        <Text style={styles.title}>{title}</Text>
        {itens.map(it => (
            <TouchableOpacity style={styles.itemContent}>
              <View style={styles.internContent}>
                <Text style={styles.itemTitle} numberOfLines={2} ellipsizeMode='tail'>{it.title}</Text>
					<View style={styles.horizontalSeparator}>
						{it.tag_new === 1 && <Text style={styles.tag_new}>Novo</Text>}
						{it.tag_discount !== 0 && <Text style={styles.tag_discount}>-{it.tag_discount}%</Text>}
					</View>
					<Text style={styles.description} numberOfLines={3} ellipsizeMode='tail'>{it.description}</Text>
					<View style={styles.horizontalSeparator}>
						<Text style={styles.text}>{it.size !== "" && it.size + " - "}{it.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
						<Text style={styles.discount_price}>{it.discount_price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
					</View>
              </View>
				<View>
					{
						it.img !== "" ? (
							<Image 
								source={{ uri: it.img }}
								style={styles.image}
								resizeMode='cover'
							/>
						) : (
							<View style={styles.image} />
						)
					}
					
				</View>
            </TouchableOpacity>   
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
			paddingHorizontal: 10
    },
    title: {
			fontFamily: 'SemiBold',
			fontSize: Fonts.title,
			color: Colors.font,
			marginBottom: 20
    },
	itemTitle: {
		fontFamily: 'SemiBold',
		fontSize: Fonts.subTitle,
		color: Colors.font,
	},
    description: {
			fontFamily: 'Regular',
			fontSize: Fonts.description,
			color: Colors.font,
			marginVertical: 10
    },
    price: {
			fontFamily: 'SemiBold',
			fontSize: Fonts.title,
			color: Colors.font,
    },
	image: {
		width: 100,
		height: 100
	},
	horizontalSeparator: {
		flexDirection: 'row',
	},
	itemContent: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		maxHeight: '100%',
		borderBottomWidth: 1.2,
		borderBottomColor: Colors.disabled,
		marginBottom: 10,
		paddingVertical: 10
	},
	internContent: {
		maxWidth: '70%' 
	},
	text: {
		fontFamily: 'SemiBold',
		fontSize: Fonts.subTitle,
		color: Colors.font,
	},
	discount_price: {
		fontFamily: 'Regular',
		fontSize: Fonts.subTitle,
		color: Colors.font,
		marginLeft: 10,
		textDecorationLine: 'line-through',
		textDecorationStyle: 'solid'
	},
	tag_new: {
		fontFamily: 'SemiBold',
		fontSize: Fonts.description,
		color: Colors.white,
		backgroundColor: Colors.new,
		paddingHorizontal: 10,
		marginVertical: 5,
		borderRadius: 6,
		marginRight: 5
	},
	tag_discount: {
		fontFamily: 'SemiBold',
		fontSize: Fonts.description,
		color: Colors.white,
		backgroundColor: Colors.primary,
		paddingHorizontal: 10,
		marginVertical: 5,
		borderRadius: 6
	}
})