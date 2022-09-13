import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/followlist_page_styles'
import { TextInput } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const AppBar = ({ filterFollowList }) => {
    const [filteredVal, setFilteredVal] = useState("")
    const navigation = useNavigation()

    return (
        <View style={styles.appBar}>
            <TouchableOpacity onPress={_=>{navigation.navigate('HomePage')}}>
                <Feather name="arrow-left" size={30} color="black" />

            </TouchableOpacity>
            <View>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    underlineColor="transparent"
                    placeholderTextColor="grey"
                    maxLength={17}
                    left={
                        <TextInput.Icon name="text-search" />
                    }
                    onChangeText={(text) => {
                        setFilteredVal(text)
                        filterFollowList(filteredVal)
                    }}
                />
            </View>
        </View>
    )
}

export default AppBar
