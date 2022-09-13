import { TouchableOpacity, Text, View, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/login_page_styles'
import Feather from 'react-native-vector-icons/Feather'
import { TextInput } from 'react-native-paper'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../config'

const InputForm = ({ navigation }) => {

    // States
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    // Log in
    const loginUser = async (em, pass) => {
        try {
            await signInWithEmailAndPassword(auth, em, pass)
            console.log("scess ")
        } catch (err) {
            console.log("x")
            ToastAndroid.showWithGravity(
                "Invalid user or wrong password.",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        }
    }

    return (
        <View style={styles.inputText}>
            <TextInput
                style={styles.loginInput}
                underlineColor="transparent"
                placeholder="E-MAIL "
                placeholderTextColor="grey"
                maxLength={30}
                left={
                    <TextInput.Icon name="account" />
                }
                onChangeText={(text) => {
                    setEmail(text)
                }}
            />
            <TextInput
                style={styles.loginInput}
                placeholder="PASSWORD"
                underlineColor="transparent"
                secureTextEntry
                placeholderTextColor="grey"
                maxLength={30}
                left={
                    <TextInput.Icon name="lock" />
                }
                onChangeText={(text) => {
                    setPassword(text)

                }}
            />
            <TouchableOpacity
                onPress={_ => { loginUser(email, password) }}
                style={styles.loginButton}>
                <Text style={styles.loginButtonText}>
                    LOGIN
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default InputForm
