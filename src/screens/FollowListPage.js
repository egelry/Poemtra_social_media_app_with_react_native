import {
    StyleSheet,
    Text,
    SafeAreaView
} from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/followlist_page_styles'
import AppBar from '../components/follow_list_page_components/AppBar'
import FollowList from '../components/follow_list_page_components/FollowList'

import { fList } from '../../utils'

const FollowListPage = ({ navigation, route }) => {
    const item = route.params
    const userId = item.userId

    const [folList, setFolList] = useState(fList)

    const filterFollowList = (filterValue) => {
        console.log("filter val : " + filterValue)

        setFolList(fList)

        const tempArr = fList.filter(item => item.userName.includes(filterValue))
        setFolList(tempArr)
        console.log("folList : " + JSON.stringify(folList))
        console.log("---------------------------------------------------------------------------------------------------------")
    }

    return (
        <SafeAreaView style={styles.followListPage}>
            <AppBar filterFollowList={filterFollowList} />
            <FollowList fList={folList} />
        </SafeAreaView>
    )
}

export default FollowListPage
