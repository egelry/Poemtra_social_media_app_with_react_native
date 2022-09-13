import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import styles from '../../styles/login_page_styles'

const Others = ({navigation}) => {
    return (
        <View style={styles.others}>
            <View style={styles.registerTextBox}>
                <Text style={styles.accountText}>don't have an account? </Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("RegisterPage")
                    }}>
                    <Text style={styles.registerText}>Register</Text>

                </TouchableOpacity>
            </View>
            <Text style={styles.forgotText}>Forgot Password?</Text>

        </View >
    )
}

export default Others
