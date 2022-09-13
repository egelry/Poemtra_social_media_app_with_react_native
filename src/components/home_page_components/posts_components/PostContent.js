import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import styles from '../../../styles/home_page_styles'

const PostContent = ({ postType, postContent, postTitle, photoResize }) => {
    return (
        <View style={styles.postContent}>
            <View style={styles.postContentTitleBox}>
                <Text style={styles.postContentTitleText}>{postTitle}</Text>

            </View>
            <View>
                {
                    postType === "drawing"
                        ?
                        <Image resizeMode={photoResize}
                            source={{ uri: postContent }}
                            style={styles.postContentPageImage} />
                        :
                        <View style={styles.postContentPageContentRes}>
                            <Text style={styles.postContentPageContentText}>{postContent}</Text>
                        </View>

                }

            </View>
        </View>
    )
}

export default PostContent
