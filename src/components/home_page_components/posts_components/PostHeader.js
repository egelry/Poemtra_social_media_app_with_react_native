import {
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import styles from '../../../styles/home_page_styles'
import { } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const PostHeader = (postContent) => {

    const ownId = "42"

    const { userPp, userName, postDate, userId } = postContent

    const navigation = useNavigation()


    const routeProfilePage = _ => {
        if (userId == ownId) {
            navigation.navigate('ProfilePage')
        }
        else {
            navigation.navigate('OtherProfilePage', {userId})

        }
    }

    return (
        <View style={styles.postHeader}>
            <View style={styles.userPpBox}>
                <Text>
                    {userPp}
                </Text>
            </View>
            <View style={styles.userNameBox}>
                <TouchableOpacity onPress={_ => {
                    routeProfilePage()

                }}>
                    <Text style={styles.userNameText}>
                        {userName}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.postDateBox}>
                <Text style={styles.postDateText}>
                    {postDate}

                </Text>
            </View>
        </View>
    )
}

export default PostHeader
