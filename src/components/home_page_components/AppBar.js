import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../../styles/home_page_styles'

const AppBar = () => {
  return (
    <View style={styles.appBar}>
      <Text style={styles.appBarPoemtraText}>POEMTRA</Text>
    </View>
  )
}

export default AppBar
