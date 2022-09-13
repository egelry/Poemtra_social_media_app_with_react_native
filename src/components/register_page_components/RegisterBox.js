import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import styles from '../../styles/register_page_styles'
import { TextInput } from 'react-native-paper'
import InputForm from './InputForm'
import OtherThings from './OtherThings'

const RegisterBox = ({navigation}) => {
    return (
        <View style={styles.registerBox}>
            <View style={styles.registerBoxContent}>
                <View style={styles.registerBoxContentTextBox}>
                    <View style={styles.registerBoxContentBoxBox}>
                        <Text style={styles.registerBoxPoemtraText}>
                            POEMTRA
                        </Text>
                        <Text style={styles.registerBoxRegisterText}>
                            REGISTER
                        </Text>
                    </View>

                </View>
                <InputForm />
                <OtherThings navigation={navigation}/>
            </View>
        </View>
    )
}

export default RegisterBox
