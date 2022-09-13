import { StyleSheet, Text, View, Animated, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Octicons from 'react-native-vector-icons/Octicons'
import styles from '../../../styles/home_page_styles'


const PostFooter = (post) => {

  const { postLike, postCategories, liked, fadeAnim} = post

  const { height, width } = Dimensions.get("window")

  const [saved, setSaved] = useState(false)

  return (

    <View style={styles.postDetailPageFooter}>
      <View style={{ flexDirection: "row", width: width * .95 }}>

        <View style={styles.postDetailPageFooterLike}>

          <Animated.View
            style={[
              {
                backgroundColor: "white"
              },
              {
                // Bind opacity to animated value
                opacity: fadeAnim
              }
            ]}
          >
            <Octicons name={liked ? "heart-fill" : 'heart'} size={27} color="red" />
          </Animated.View>

          <Text style={styles.postDetailPageFooterLikeText}>
            {postLike} {postLike === 1 ? "like" : postLike === 0 ? "like" : "likes"}
          </Text>
        </View>

        <View style={styles.postFooterSaved}>
          <TouchableOpacity onPress={_ => { setSaved(!saved) }}>
            <Fontisto name={saved ? "bookmark-alt" : "bookmark"} size={27} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={_ => { alert() }}>
            <Feather name="more-vertical" size={27} color="black" />

          </TouchableOpacity>

        </View>

      </View>








      <View style={styles.postDetailPageFooterCategories}>
        {
          postCategories.map((data, index) => {
            return (
              <Text
                key={index}
                style={styles.postDetailPageFooterCategoriesText}>#{data} </Text>
            )
          })

        }
      </View>
    </View >
  )
}

export default PostFooter
