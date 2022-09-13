import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import styles from '../../styles/login_page_styles'


const WelcomeMessage = () => {
  return (
    <View style={styles.welcomeMessage}>
      <Text style={styles.welcomeMessageText}>WELCOME</Text>
    </View>
  )
}

export default WelcomeMessage
