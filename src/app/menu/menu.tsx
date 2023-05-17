import { FlatList, SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native'
import React, { useEffect } from 'react'
import HeaderHome from '../../components/headerHome'
import { useGetStore } from '../../hooks/useGetStore'
import { Colors } from '../../constants/styles'

export default function Menu() {
  const { getStore, result, loading} = useGetStore()

  async function handleGetStore() {
    await getStore()
  }

  useEffect(() => {
    handleGetStore()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {loading === false && (
          <>
            <HeaderHome storeName={result.data.name_company} time={result.data.time_delivery} logo={result.data.logo}/>

            {/* <FlatList 
              horizontal
              data={result.data.categories}
              renderItem={({ item, index }) => (
                <View>
                  <Text>{item.name_category}</Text>
                </View>
              )}
            /> */}

          </>
        )}

      </ScrollView>
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  }
})