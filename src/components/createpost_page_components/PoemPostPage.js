import {
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  Pressable,
  ToastAndroid
} from 'react-native'
import React, { useEffect, useState } from 'react'

import styles from '../../styles/createpost_page_styles'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwasome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialDesign from 'react-native-vector-icons/MaterialIcons'


const PoemPostPage = ({ navigation }) => {

  const [poemValue, setPoemValue] = useState("")
  const [previewContentValue, setPreviewContentValue] = useState("")
  const [previewTitleValue, setPreviewTitleValue] = useState("")
  const [categories, setCategories] = useState([])
  const [lineNumber, setLineNumber] = useState(4)

  const splitPoemLines = _ => {


    // poem set line num
    setPreviewContentValue(
      poemValue.replace(
        new RegExp(`(?:.*\\r?\\n){${lineNumber}}`, 'gm'),
        '$&\n'
      )
    )
  }

  // category selection
  const categorySelection = (val) => {
    if (categories.includes(val)) {
      removeValueFromCategories(val)
    }
    else {
      if (categories.length < 3) {
        setCategories([...categories, val])
        console.log(categories)
      }
      else {
        ToastAndroid.showWithGravity(
          "You can select maximum 3 categories.",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      }
    }
  }


  // remove value from categories
  const removeValueFromCategories = (val) => {
    let filteredArray = categories.filter(item => item !== val)
    setCategories(filteredArray)
  }


  useEffect(() => {
    splitPoemLines()

  })

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} touchSoundDisabled={true}>
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.emptyPostPage}>

        {/* AppBar */}
        <View style={styles.emptyPostPageAppBar}>
          <TouchableOpacity
            onPress={_ => {
              navigation.navigate("CreatePostPage")
            }}>
            <View style={styles.emptyPostPageArrowLeftBox}>
              <Feather name="arrow-left" size={30} color="black" />
            </View>
          </TouchableOpacity>
          <View style={styles.emptyPostPagePostTypeBox}>
            <FontAwasome5 name="bars" size={21} color="#463cfb" />

          </View>
        </View>

        {/* Content */}
        <View style={styles.emptyPostPageContent}>

          {/* Input */}
          <View style={styles.textInputsArea}>
            <View style={styles.titleAndContentInputBox}>
              <TextInput
                style={styles.emptyPostPageTitleInput}
                placeholder="TITLE"
                placeholderTextColor="grey"
                maxLength={17}
                onChangeText={(text) => {
                  setPreviewTitleValue(text.charAt(0).toUpperCase() + text.slice(1))
                }}
              />

              <TextInput
                style={styles.emptyPostPageContentInput}
                multiline
                placeholder="CONTENT"
                numberOfLines={20}
                placeholderTextColor="grey"
                onChangeText={(text) => {
                  setPoemValue(text)

                }}
              />

            </View>
            <View style={styles.categoryAndToolBox}>
              <View style={styles.poemPostPageCategoryInputBox}>
                <View style={styles.categoryInputItem}>
                  <Fontisto name="heartbeat-alt" size={22} color={
                    categories.includes('longing') ? "black" : "#bebebe"} />
                  <Pressable onPress={_ => {
                    categorySelection('longing')
                  }}>
                    {
                      categories.includes('longing') ?
                        <View style={styles.categoryInputItemTextBox}>
                          <Text style={styles.categoryInputItemEnabledText}>LONGING</Text>
                        </View>
                        :
                        <View style={styles.categoryInputItemTextBox}>
                          <Text style={styles.categoryInputItemText}>LONGING</Text>
                        </View>
                    }
                  </Pressable>
                </View>

                <Pressable onPress={_ => {
                  categorySelection('love')
                }}>
                  <View style={styles.categoryInputItem}>
                    <Feather name="heart" size={22} color={
                      categories.includes('love') ? "black" : "#bebebe"} />
                    {
                      categories.includes('love') ?
                        <View style={styles.categoryInputItemTextBox}>
                          <Text style={styles.categoryInputItemEnabledText}>LOVE</Text>
                        </View>
                        :
                        <View style={styles.categoryInputItemTextBox}>
                          <Text style={styles.categoryInputItemText}>LOVE</Text>
                        </View>
                    }
                  </View>
                </Pressable>

                <Pressable onPress={_ => {
                  categorySelection('loneliness')

                }}>
                  <View style={styles.categoryInputItem}>
                    <FontAwasome5 name="heart-broken" size={22} color={
                      categories.includes('loneliness') ? "black" : "#bebebe"} />
                    {
                      categories.includes('loneliness') ?
                        <View style={styles.categoryInputItemTextBox}>
                          <Text style={styles.categoryInputItemEnabledText}>LONELINESS</Text>
                        </View>
                        :
                        <View style={styles.categoryInputItemTextBox}>
                          <Text style={styles.categoryInputItemText}>LONELINESS</Text>
                        </View>
                    }
                  </View>
                </Pressable>
                <Pressable onPress={_ => {
                  categorySelection('pessimism')

                }}>

                  <View style={styles.categoryInputItem}>
                    <FontAwasome5 name="book-dead" size={22} color={
                      categories.includes('pessimism') ? "black" : "#bebebe"} />
                    {
                      categories.includes('pessimism') ?
                        <View style={styles.categoryInputItemTextBox}>
                          <Text style={styles.categoryInputItemEnabledText}>PESSIMISM</Text>
                        </View>
                        :
                        <View style={styles.categoryInputItemTextBox}>
                          <Text style={styles.categoryInputItemText}>PESSIMISM</Text>
                        </View>
                    }
                  </View>
                </Pressable>

                <Pressable onPress={_ => {
                  categorySelection('happiness')
                }}>
                  <View style={styles.categoryInputItem}>
                    <FontAwasome5 name="smile" size={22} color={
                      categories.includes('happiness') ? "black" : "#bebebe"} />
                    {
                      categories.includes('happiness') ?
                        <View style={styles.categoryInputItemTextBox}>
                          <Text style={styles.categoryInputItemEnabledText}>HAPPINESS</Text>
                        </View>
                        :
                        <View style={styles.categoryInputItemTextBox}>
                          <Text style={styles.categoryInputItemText}>HAPPINESS</Text>
                        </View>
                    }
                  </View>
                </Pressable>

              </View>
              <View style={styles.poemPostPageToolBox}>
                <View style={styles.poemPostPageAddLineBox}>
                  <TouchableOpacity
                    onPress={_ => {
                      setLineNumber(lineNumber + 1)
                    }}>
                    <View style={styles.poemPostPageAddLineIconBox}>
                      <Feather name="align-justify" size={20} color="grey" />
                      <Feather name="plus" size={20} color="grey" />

                    </View>
                  </TouchableOpacity>

                </View>
                <View style={styles.poemPostPageAddParagraph}>

                  <TouchableOpacity
                    onPress={_ => {
                      lineNumber > 1 ? setLineNumber(lineNumber - 1) : null

                    }}>
                    <View style={styles.poemPostPageRemoveLineIconBox}>

                      <Feather name="align-justify" size={20} color="grey" />
                      <Feather name="minus" size={20} color="grey" />

                    </View>
                  </TouchableOpacity>

                </View>
              </View>
            </View>
          </View>

          {/* Preview */}
          <View style={styles.emptyPostPagePreviewBox}>
            <View style={styles.emptyPostPagePreview}>
              {/* post header */}
              <View style={styles.postHeader}>
                <View style={styles.postPpAndName}>
                  <View style={styles.userPpBox}>
                    <Text>
                      PP
                    </Text>
                  </View>
                  <View style={styles.userNameBox}>
                    <Text style={styles.userNameText}>
                      LOREM
                    </Text>
                  </View>
                </View>
                <View style={styles.postDateBox}>
                  <Text style={styles.postDateText}>
                    22.10.2022

                  </Text>
                </View>
              </View>
              {/* post content */}
              <ScrollView style={styles.postContent}>
                <View style={styles.postTitleBox}>
                  <Text style={styles.poemPostTitleText}>{previewTitleValue}</Text>
                </View>

                <View style={styles.postContentBox}>
                  <Text style={styles.poemPostContentText}>{previewContentValue}</Text>
                </View>
              </ScrollView>
            </View>
            <View style={styles.emptyPostPagePreviewTextBox}>
              <Text style={styles.emptyPostPagePreviewText}>
                PREVIEW POST
              </Text>
            </View>
          </View>
        </View>

      </KeyboardAvoidingView >
    </TouchableWithoutFeedback>

  )
}

export default PoemPostPage
