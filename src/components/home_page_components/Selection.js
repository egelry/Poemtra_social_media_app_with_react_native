import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/home_page_styles'

const Selection = ({pageSelection}) => {

    const [page, setPage] = useState('posts')


    return (
        <View style={styles.explorOrMainCurrent}>
            <TouchableOpacity onPress={_ => {
                setPage("posts")
                pageSelection("posts")
            }}>
                <View style={page === "posts" ?
                    styles.explorOrMainCurrentBox :
                    styles.explorOrMainCurrentDisabledBox}>
                    <Text
                        style={page === "posts" ?
                            styles.explorOrMainCurrentText :
                            styles.explorOrMainCurrentDisabledText}>
                        POSTS
                    </Text>
                </View>

            </TouchableOpacity>
            <View style={styles.exploreOrMainCurrentDivider} />
            <TouchableOpacity onPress={_ => {
                setPage("explore")
                pageSelection("explore")
            }}>
                <View style={page === "explore" ?
                    styles.explorOrMainCurrentBox :
                    styles.explorOrMainCurrentDisabledBox}>
                    <Text
                        style={page === "explore" ?
                            styles.explorOrMainCurrentText :
                            styles.explorOrMainCurrentDisabledText}>
                        EXPLORE
                    </Text>
                </View>

            </TouchableOpacity>
        </View>
    )
}

export default Selection
