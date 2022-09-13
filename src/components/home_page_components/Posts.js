import { TouchableOpacity, StyleSheet, Text, ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/home_page_styles'
import Post from './posts_components/Post'
import Selection from './Selection'

import {posts, explore} from '../../utils'


const Posts = () => {



    const [page, setPage] = useState("posts")


    const pageSelection = (selection = "posts") => {
        setPage(selection)
    }




    return (
        <ScrollView style={styles.posts}>
            <Selection pageSelection={pageSelection} />
            {

                page === "posts" ?
                    posts.map((d) => {
                        return <Post
                            key={d.postId}
                            userPp={d.userPp}
                            userId={d.userId}
                            userName={d.userName}
                            postTitle={d.postTitle}
                            postDate={d.postDate}
                            postContent={d.postContent}
                            postType={d.postType}
                            photoResize={d.photoResize}
                            postCategories={d.postCategories}
                            postLike={d.postLike}
                        />
                    })
                    :
                    explore.map((d) => {
                        return <Post
                            key={d.postId}
                            userPp={d.userPp}
                            userId={d.userId}
                            userName={d.userName}
                            postTitle={d.postTitle}
                            postDate={d.postDate}
                            postContent={d.postContent}
                            postType={d.postType}
                            photoResize={d.photoResize}
                            postCategories={d.postCategories}
                            postLike={d.postLike}
                        />
                    })
            }
            <View style={styles.postSpace} />

        </ScrollView >
    )


}


export default Posts

