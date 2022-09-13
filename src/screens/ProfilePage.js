import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../styles/profile_page_styles'
import AppBar from '../components/profile_page_components/AppBar'
import Header from '../components/profile_page_components/Header'
import UserPosts from '../components/profile_page_components/UserPosts'
import Selection from '../components/profile_page_components/Selection'
import Saved from '../components/profile_page_components/Saved'

import { userPosts } from '../../utils'

const ProfilePage = ({ navigation }) => {

    const [selectedState, setSelectedState] = useState("posts")

    const selectionList = (selected = "posts") => {
        console.log("selected: " + selected)
        setSelectedState(selected)
    }

    const ownId = 42

    const postNum = userPosts.length
    return (
        <SafeAreaView style={styles.profilePage}>
            <AppBar navigation={navigation} />
            <Header
                postNum={postNum}
                navigation={navigation}
                userId={ownId} />
            <Selection selectionList={selectionList} />
            {
                selectedState === "posts"
                    ?
                    <UserPosts userPosts={userPosts} navigation={navigation} />
                    :
                    <Saved />

            }
        </SafeAreaView>
    )
}

export default ProfilePage