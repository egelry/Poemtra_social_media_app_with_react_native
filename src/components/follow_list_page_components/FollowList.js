import { Text, FlatList, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/followlist_page_styles'
import Feather from 'react-native-vector-icons/Feather'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'




const UserItem = ({ user }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.followListItem}>
            <View style={styles.followListItemLeftSide}>
                <View style={styles.followListItemPp}>
                    <Text>
                        {user.userPp}
                    </Text>
                </View>
                <View style={styles.followListItemName}>
                    <Text style={styles.followListItemNameText}>
                        {user.userName}
                    </Text>
                </View>
            </View>
            <View style={styles.followListItemRightSide}>
                <View style={styles.followListItemGoProfile}>
                    <TouchableOpacity
                        onPress={_ => {
                            navigation.navigate("OtherProfilePage", {
                                userId: user.userId
                            })
                        }}>
                        <Feather name="arrow-right" size={27} color="black" />

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const FollowList = ({ fList }) => {
    return (
        <ScrollView style={styles.followListPage}>
            {
                fList.map((data, index) => <UserItem key={index} user={data} />)
            }

        </ScrollView>


    )
}



export default FollowList
