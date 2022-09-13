import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useState, useRef } from 'react'
import styles from '../../../styles/home_page_styles'

import PostHeader from './PostHeader'
import PostContent from './PostContent'
import PostFooter from './PostFooter'

import DoubleClick from 'react-native-double-tap'

const Post = (post) => {
    const [liked, setLiked] = useState(false)
    const { userPp, userId, userName, postTitle, photoResize,
        postType, postCategories, postDate, postContent, postLike } = post



    // like animation => fade out and fade in
    const fadeAnim = useRef(new Animated.Value(1)).current;

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start(({ finished }) => {
            setLiked(!liked)
            if (finished) {
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 200,
                    useNativeDriver: true,
                }).start()
            }
        });
    };




    return (
        <DoubleClick
            delay={200}
            doubleTap={() => {
                fadeOut()
            }}>
            <View style={styles.post} >
                <PostHeader
                    userPp={userPp}
                    userName={userName}
                    postDate={postDate}
                    userId={userId} />
                <PostContent
                    postContent={postContent}
                    postType={postType}
                    photoResize={photoResize}
                    postTitle={postTitle} />
                <PostFooter
                    postLike={postLike}
                    liked={liked}
                    postCategories={postCategories}
                    fadeAnim={fadeAnim}
                />
            </View>
        </DoubleClick>
    )
}

export default Post
