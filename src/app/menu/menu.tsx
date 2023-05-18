import { SafeAreaView, ScrollView, StyleSheet, View, Text, ListRenderItem, VirtualizedList } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import HeaderHome from '../../components/headerHome'
import { useGetStore } from '../../hooks/useGetStore'
import { Colors } from '../../constants/styles'
import { FlatList } from 'react-native-gesture-handler'
import { ICategories } from '../../interfaces/IStore'
import uuid from 'react-native-uuid';
import Categories from '../../components/categories'
import ItensComponent from '../../components/items'

export default function Menu() {
  const { getStore, result, loading} = useGetStore()

  async function handleGetStore() {
    await getStore()
  }

  const renderCategories: ListRenderItem<ICategories> = useCallback(({ item, index }) => <Categories key={String(`${item.name_category}-${index}`)} title={item.name_category} onClick={() => {}} focus={false}/>, [])
  
  const renderItems: ListRenderItem<ICategories> = useCallback(({ item, index }) => <ItensComponent key={String(`${item.name_category}-${index}`)} title={item.name_category} itens={item.itens} />, [])

  useEffect(() => {
    handleGetStore()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {loading === false && (
        <FlatList 
          data={result.data.categories.flat()}
          keyExtractor={({ name_category }, index) => String(`${name_category}-${index}`)}
          initialNumToRender={10}
          renderItem={renderItems}
          ListHeaderComponent={
            <>
              <HeaderHome storeName={result.data.name_company} time={result.data.time_delivery} logo={result.data.logo}/>
              <FlatList
                data={result.data.categories.flat()}
                renderItem={renderCategories}
                keyExtractor={({ name_category }, index) => String(`${name_category}-${index}`)}
                horizontal
                initialNumToRender={10}
                showsHorizontalScrollIndicator={false}
              />
            </>
          }
        />
      )}
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  }
})