import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View
} from 'react-native'
import React from 'react'
import styles from '../../styles/profile_page_styles'
import Feather from 'react-native-vector-icons/Feather'

const OtherPageAppBar = ({ navigation }) => {
    return (
        <View style={styles.profilePageAppBar}>
            <TouchableOpacity onPress={_ => { navigation.navigate("HomePage") }} >
                <View style={styles.profilePageAppBarIconBox}>
                    <Feather name="arrow-left" size={25} color="black" />
                </View>
            </TouchableOpacity>
            
        </View>
    )
}

export default OtherPageAppBar
