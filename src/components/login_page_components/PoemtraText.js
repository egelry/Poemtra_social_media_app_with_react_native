import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../../styles/login_page_styles'
import Feather from 'react-native-vector-icons/Feather'

const PoemtraText = () => {

    const loginText = "LOGIN"

    return (
        <View style={styles.poemtraTextBox}>
            <Text style={styles.poemtraText}>POEMTRA</Text>
            <Text style={styles.loginText}>{loginText}</Text>
            
        </View>
    )
}

export default PoemtraText
