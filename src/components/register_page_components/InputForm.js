import { ToastAndroid, TouchableOpacity, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/register_page_styles'
import { TextInput } from 'react-native-paper'

import { db, auth } from '../../../config'
import { useNavigation } from '@react-navigation/native'

import {register} from '../../utils'

const InputForm = () => {

    // navigation
    const navigation = useNavigation()

    // states
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordVal, setPasswordVal] = useState("")



    const _createUser = async () => {

        if (password === passwordVal && validateEmail(email)) {
            try {

                register(email, password)

            } catch (err) {
                console.log("err : " + err)

            }
        }
        else if (password !== passwordVal) {
            ToastAndroid.showWithGravity(
                "passwords did not match",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        }
        else if (!validateEmail(email)) {
            ToastAndroid.showWithGravity(
                "Invalid Email.",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        }

    }
    // email regular expression
    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    return (
        <View style={styles.inputForm}>
            <TextInput
                style={styles.registerInput}
                placeholder="NAME"
                placeholderTextColor="grey"
                underlineColor="transparent"
                maxLength={17}
                left={
                    <TextInput.Icon name="account" />
                }
                onChangeText={(text) => {
                    setName(text)
                }}
            />
            <TextInput
                style={styles.registerInput}
                placeholder="E-MAIL"
                placeholderTextColor="grey"
                underlineColor="transparent"
                left={
                    <TextInput.Icon name="email" />
                }
                onChangeText={(text) => {
                    setEmail(text)
                }}
            />

            <TextInput
                style={styles.registerInput}
                placeholder="PASSWORD"
                placeholderTextColor="grey"
                maxLength={17}
                underlineColor="transparent"
                left={
                    <TextInput.Icon name="lock" />
                }
                onChangeText={(text) => {

                    setPassword(text)
                }}
            />
            <TextInput
                style={styles.registerInput}
                placeholder="PASSWORD"
                placeholderTextColor="grey"
                maxLength={17}
                underlineColor="transparent"
                left={
                    <TextInput.Icon name="lock-check" />
                }
                onChangeText={(text) => {
                    setPasswordVal(text)

                }}
            />
            <TouchableOpacity
                onPress={_ => {
                    _createUser()
                }}
                style={styles.registerButton}>
                <Text style={styles.registerButtonText}>
                    REGISTER
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default InputForm
