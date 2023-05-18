import { SafeAreaView, StyleSheet, ListRenderItem } from 'react-native'
import React, { useCallback, useEffect, useState, createRef } from 'react'
import HeaderHome from '../../components/headerHome'
import { useGetStore } from '../../hooks/useGetStore'
import { Colors } from '../../constants/styles'
import { FlatList } from 'react-native-gesture-handler'
import { ICategories } from '../../interfaces/IStore'
import Categories from '../../components/categories'
import ItensComponent from '../../components/items'

export default function Menu() {
  const { getStore, result, loading} = useGetStore()
  const [settedIndex, setSettedIndex] = useState<number>(0)
  const ref = createRef<FlatList>()

  async function handleGetStore() {
    await getStore()
  }

  const renderCategories: ListRenderItem<ICategories> = useCallback(({ item, index }) => <Categories key={String(`${item.name_category}-${index}`)} title={item.name_category} onClick={() => setSettedIndex(index)} focus={index === settedIndex ? true : false }/>, [])
  
  const renderItems: ListRenderItem<ICategories> = useCallback(({ item, index }) => <ItensComponent key={String(`${item.name_category}-${index}`)} title={item.name_category} index={index} itens={item.itens} /> , [])

  useEffect(() => {
    ref.current?.scrollToIndex({
      index: settedIndex,
      animated: true,
      viewOffset: 50,
      viewPosition: 0
    })
  }, [settedIndex])

  useEffect(() => {
    handleGetStore()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {loading === false && (
        <FlatList 
          initialScrollIndex={settedIndex}
          ref={ref}
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