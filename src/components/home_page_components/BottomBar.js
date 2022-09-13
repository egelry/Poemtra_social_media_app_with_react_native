import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from '../../styles/home_page_styles'
import Feather from 'react-native-vector-icons/Feather'

const BottomBar = ({ navigation }) => {
    return (
        <View pointerEvents="box-none" style={styles.bottomBar}>
            <View style={styles.bottomBarBox}>
                <View style={styles.bottomBarDividerBox}>
                    <View style={styles.bottomBarDivider} />

                </View>
                <View style={styles.iconBox}>
                    <View>
                        <Feather name="home" size={25} color="black" />
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("CreatePostPage")
                            console.log("AAAAA")
                        }}>
                        <View style={styles.createPostBox}>
                            <Text style={styles.createPostText}>P</Text>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={_=>{navigation.navigate("ProfilePage")}}>
                        <View>
                            <Feather name="user" size={25} color="black" />

                        </View>
                    </TouchableOpacity>


                </View>
            </View>
        </View>
    )
}

export default BottomBar
