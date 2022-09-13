import { StyleSheet, Text, Pressable, View } from 'react-native'
import React from 'react'
import styles from '../../styles/createpost_page_styles'
import Feather from 'react-native-vector-icons/Feather'

const AppBar = ({navigation}) => {


    return (
        <View style={styles.appBar}>
            <Pressable onPress={_=>{navigation.navigate("HomePage")}}>
                <Feather name="arrow-left" size={30} color="black" />

            </Pressable>
        </View>
    )
}

export default AppBar
