import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View
} from 'react-native'
import React from 'react'
import styles from '../../styles/profile_page_styles'
import Feather from 'react-native-vector-icons/Feather'

const AppBar = ({ navigation }) => {
    return (
        <View style={styles.profilePageAppBar}>
            <TouchableOpacity onPress={_ => { navigation.navigate("HomePage") }} >
                <View style={styles.profilePageAppBarIconBox}>
                    <Feather name="arrow-left" size={25} color="black" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={_ => { navigation.navigate("SettingsPage") }}>
                <View style={styles.profilePageAppBarIconBox}>
                    <Feather name="settings" size={25} color="black" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default AppBar
