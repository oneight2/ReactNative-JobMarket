import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { View, Text, TextInput, Image, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { icons, images, SIZES } from '../../../constants'

import styles from './welcome.style'

const JobTypes = ["full-time", "part-time", "freelance", "contractor", "buruh", "magang"]

const Welcome = () => {
  const [activeJob, setactiveJob] = useState("full-time")
  const router = useRouter()
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Syarif</Text>
        <Text style={styles.welcomeMessage}>Find Your Perfect Job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} placeholder="what are you looking for?" value='' onChange={() => { }} />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image source={icons.search} resizeMode="contain" style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={JobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJob, item)}
              onPress={() => {
                setactiveJob(item),
                  router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJob, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />

      </View>
    </View>
  )
}

export default Welcome