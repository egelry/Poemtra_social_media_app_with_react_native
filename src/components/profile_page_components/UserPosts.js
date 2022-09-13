import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Pressable
} from 'react-native'
import React from 'react'
import styles from '../../styles/profile_page_styles'
import Feather from 'react-native-vector-icons/Feather'

const UserPosts = ({ userPosts, navigation }) => {

    //render item
    const renderUserPostsItem = ({ item, index }) => {
        return (
            <Pressable onPress={_ => {
                navigation.navigate("PostDetailPage", { item })
            }}>
                <View style={styles.itemBox}>
                    <View style={styles.itemPostTypeBox}>
                        <Text style={styles.itemPostTypeText}>{item.postType.toUpperCase()}</Text>
                    </View>
                    <View style={styles.itemPostTitleBox}>
                        <Text style={styles.itemPostTitleText}>{item.postTitle}</Text>
                    </View>
                    <View style={styles.itemPostLikeBox}>
                        <Feather name="heart" size={30} color="#493cfb" />
                        <Text style={styles.itemPostLikeText}>{item.postLike}</Text>
                    </View>
                </View>
            </Pressable>
        )

    }

    return (
        <View style={styles.userPosts}>
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={userPosts}
                renderItem={renderUserPostsItem}
                keyExtractor={(item) => item.postId}
                numColumns={2}
            />




        </View>
    )
}

export default UserPosts
