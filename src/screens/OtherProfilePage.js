import { View, SafeAreaView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../styles/profile_page_styles'
import Header from '../components/profile_page_components/Header'
import UserPosts from '../components/profile_page_components/UserPosts'
import Selection from '../components/profile_page_components/Selection'
import Saved from '../components/profile_page_components/Saved'
import OtherPageAppBar from '../components/profile_page_components/OtherPageAppBar'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather'

import {userPosts} from '../../utils'

const OtherProfilePage = ({ navigation, route }) => {


    const item = route.params


    const [selectedState, setSelectedState] = useState("posts")
    const [followed, setFollowed] = useState(false)

    const selectionList = (selected = "posts") => {
        console.log("selected: " + selected)
        setSelectedState(selected)
    }

    console.log("user id : " + item.userId)

    const postNum = userPosts.length
    return (
        <SafeAreaView style={styles.profilePage}>
            <OtherPageAppBar navigation={navigation} />
            <Header postNum={postNum} />
            <View style={styles.otherProfilePageFollowBox}>
                <TouchableOpacity onPress={_ => { setFollowed(!followed) }}>
                    {
                        followed ?
                            <View style={styles.otherProfilePageFollowedButton}>
                                <Feather name="user-minus" size={15} color="white" />
                                <Text style={styles.otherProfilePageFollowedButtonText}>
                                    UNFOLLOW
                                </Text>
                            </View>
                            :
                            <View style={styles.otherProfilePageFollowButton}>
                                <Text style={styles.otherProfilePageFollowButtonText}>
                                    FOLLOW
                                </Text>
                            </View>
                    }
                </TouchableOpacity>
            </View>
            <UserPosts userPosts={userPosts} navigation={navigation} />

        </SafeAreaView>
    )
}



export default OtherProfilePage