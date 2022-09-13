import { TouchableOpacity, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/profile_page_styles'

const Selection = ({ selectionList }) => {

    const [selected, setSelected] = useState("posts")



    return (
        <View style={styles.selection}>
            <TouchableOpacity onPress={_ => {
                setSelected("posts")
                selectionList("posts")
            }}>
                <Text style={selected === "posts" ? styles.selectionText : styles.disableSelectionText}>
                    POSTS
                </Text>

            </TouchableOpacity>
            <View style={styles.selectionDivider} />
            <TouchableOpacity onPress={_ => {
                setSelected("saved")
                selectionList("saved")

            }}>
                <Text style={selected === "saved" ? styles.selectionText : styles.disableSelectionText}>
                    SAVED
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Selection
