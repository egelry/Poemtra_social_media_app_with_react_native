import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions
} from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/profile_page_styles'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Octicons from 'react-native-vector-icons/Octicons'


const PostDetailPage = ({ navigation, route }) => {

  //props => item
  const item = route.params

  const { height, width } = Dimensions.get("window")

  //destructuring item
  const {
    postId,
    postTitle,
    userId,
    postType,
    postContent,
    photoResize,
    postCategories,
    postLike,
    postDate
  } = item.item


  const ownId = "42"

  const routeProfilePage = _ => {
    if (userId == ownId) {
      navigation.navigate('ProfilePage')
    }
    else {
      navigation.navigate('OtherProfilePage', { userId })

    }
  }


  const [saved, setSaved] = useState(false)

  return (
    <ScrollView style={styles.postDetailPage}>
      {/* appbar */}
      <View style={styles.postDetailPageAppBar}>
        <TouchableOpacity onPress={_ => {
          navigation.navigate("ProfilePage")
        }}>

          <Feather name="arrow-left" size={25} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={_ => { console.log("selection") }}>
          <Feather name="more-vertical" size={25} color="black" />
        </TouchableOpacity>

      </View>

      {/* content */}
      <View style={styles.postDetailPageContent}>

        <View style={styles.postDetailPageContentBox}>
          {/* content header */}

          <View style={styles.postDetailPageContentHeaderBox}>
            <View style={styles.userPp}>
              <View style={styles.userPpBox}>
                <Text>
                  PP
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={_ => {
              console.log("clicked")
              routeProfilePage()
            }} >
              <View style={styles.userNameBox}>
                <Text style={styles.userNameText}>
                  Lorem Ipsum Dolor
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.postDateBox}>
              <Text style={styles.postDateText}>
                {postDate}

              </Text>
            </View>
          </View>

          {/* content */}
          {
            postType === "drawing" ?

              /* drawing post */
              <View style={styles.postDetailPageImageBox}>
                <View style={styles.postDetailPageTitleBox}>
                  <Text style={styles.postDetailPageTitleText}>{postTitle}</Text>
                </View>
                <Image resizeMode={photoResize}
                  source={{ uri: postContent }}
                  style={styles.postDetailPageImage} />
              </View>
              :
              /* empty or poem post */
              <View style={styles.postDetailPageContentContentBox}>
                <View style={styles.postDetailPageTitleBox}>
                  <Text style={styles.postDetailPageTitleText}>
                    {postTitle}
                  </Text>
                </View>
                <View style={styles.postDetailPageContentRes}>
                  <Text style={styles.postDetailPageContentText}>{postContent}</Text>
                </View>
              </View>
          }

          {/* footer */}
          <View style={styles.postDetailPageFooter}>
            <View style={{ flexDirection: "row", width: width * .95 }}>

              <View style={styles.postDetailPageFooterLike}>


                <Octicons name='heart' size={27} color="red" />

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
        </View>

      </View>

    </ScrollView >
  )
}

export default PostDetailPage
