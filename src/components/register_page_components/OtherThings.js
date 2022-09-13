import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import styles from '../../styles/register_page_styles'

const OtherThings = ({ navigation }) => {
    return (
        <View style={styles.alreadyHave}>
            <View style={styles.alreadyHaveBox}>
                <Text style={styles.alreadyHaveText}>Already Have an Account? </Text>
                <TouchableOpacity
                    onPress={_ => {
                        navigation.navigate("LoginPage")
                    }}>
                    <Text style={styles.alreadyHaveLoginText}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default OtherThings
