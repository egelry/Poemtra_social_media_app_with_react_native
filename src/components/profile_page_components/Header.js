import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import styles from '../../styles/profile_page_styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Header = ({ postNum, userId }) => {

    const navigation  = useNavigation()


    return (
        <View style={styles.profilePageHeader}>
            <View style={styles.profilePageHeaderImageBox}>
                <Image
                    style={styles.profilePageHeaderImage}
                    source={require('../../../assets/imgs/pp.jpg')} />

            </View>
            <View style={styles.profilePageHeaderUserBox}>
                <Text style={styles.profilePageHeaderUserNameText}>
                    LOREM
                </Text>
                <Text style={styles.profilePageHeaderUserNameText}>
                    IPSUM
                </Text>
            </View>
            <View style={styles.profilePageHeaderPropsBox}>
                <View style={styles.profilePageHeaderUserIconBox}>
                    <Text style={styles.profilePageHeaderUserText}>
                        {postNum}
                    </Text>
                    <Text style={styles.profilePageHeaderUserBottomText}>
                        POST
                    </Text>

                </View>
                <View style={styles.divider} />

                <View style={styles.profilePageHeaderUserIconBox}>
                    <TouchableOpacity onPress={_ => {
                        navigation.navigate("FollowingListPage", { userId })
                    }}>
                        <View style={styles.profilePageHeaderUserIconItem}>
                            <Text style={styles.profilePageHeaderUserText}>
                                90
                            </Text>
                            <Text style={styles.profilePageHeaderUserBottomText}>
                                FOLLOWER
                            </Text>
                        </View >
                    </TouchableOpacity>
                </View>
                <View style={styles.divider} />

                <View style={styles.profilePageHeaderUserIconBox}>
                    <TouchableOpacity
                        onPress={_ => {
                            navigation.navigate("FollowingListPage", { userId })
                        }}>
                        <View style={styles.profilePageHeaderUserIconItem}>
                            <Text style={styles.profilePageHeaderUserText}>
                                123
                            </Text>
                            <Text style={styles.profilePageHeaderUserBottomText}>
                                FOLLOWING
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Header
