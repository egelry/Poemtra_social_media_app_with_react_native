import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../../styles/register_page_styles'

const RegisterText = () => {
    return (
        <View style={styles.registerTextBox}>
            <Text style={styles.registerText}>
                CREATE ACCOUNT
            </Text>
        </View>
    )
}

export default RegisterText
