import {
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  TextInput,
  Pressable,
  Image,
  ToastAndroid,
  Keyboard,
  TouchableWithoutFeedback,
  PermissionsAndroid
} from 'react-native'
import React, { useState } from 'react'

import styles from '../../styles/createpost_page_styles'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const DrawingPostPage = ({ navigation }) => {


  //state
  const [title, setTitle] = useState("")
  const [photo, setPhoto] = useState("")
  const [photoResize, setPhotoResize] = useState("contain")
  const [categories, setCategories] = useState([])


  // category selection
  const categorySelection = (val) => {
    if (categories.includes(val)) {
      removeValueFromCategories(val)
    }
    else {
      if (categories.length < 3) {
        setCategories([...categories, val])
      }
      else {
        ToastAndroid.showWithGravity(
          "You can select maximum 3 categories.",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      }
    }
    console.log("categories : " + categories)
  }

  // remove value from categories
  const removeValueFromCategories = (val) => {
    let filteredArray = categories.filter(item => item !== val)
    setCategories(filteredArray)
  }

  // options for image that came from image library or camera
  let options = {
    saveToPhotos: true,
    mediaType: "photo"
  };

  // launch image library
  const openImageLibrary = async _ => {

    // camera -> android permission
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    )

    //permission accepted
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchImageLibrary(options)

      // operation not cancelled 
      if (!result.didCancel) {
        console.log("res : " + JSON.stringify(result))

        setPhoto(result.assets[0]?.uri)
      }

    }
  }

  //launc camera
  const openCamera = async _ => {

    // camera -> android permission
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    )

    //permission accepted
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options)

      // operation not cancelled 
      if (!result.didCancel) {
        console.log("res : " + JSON.stringify(result))

        setPhoto(result.assets[0]?.uri)
      }

    }
  }

  //static variables
  const openLibraryText = "OPEN\n IMAGE\n LIBRARY"
  const openCameraText = "TAKE\n A\n PHOTO"

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} touchSoundDisabled={true} >
      <View
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
            <Feather name="image" size={21} color="#463cfb" />

          </View>
        </View>

        {/* Content */}
        <View style={styles.emptyPostPageContent}>

          {/* Input */}
          <View style={styles.textInputsArea}>
            <View style={styles.drawingPostPageLeftSide}>
              <TextInput
                style={styles.emptyPostPageTitleInput}
                placeholder="TITLE"
                placeholderTextColor="grey"
                maxLength={17}
                onChangeText={(text) => {
                  setTitle(text.charAt(0).toUpperCase() + text.slice(1))
                }}
              />
              <View style={styles.photoContentBox}>
                <TouchableOpacity onPress={_ => {
                  openCamera()
                }}>
                  <View style={styles.takePhotoBox}>
                    <Text style={styles.photoText}>{openCameraText}</Text>
                    <Feather name="camera" size={35} color="black" />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={_ => {
                  openImageLibrary()
                }}>
                  <View style={styles.openLibraryBox}>
                    <Text style={styles.photoText}>{openLibraryText}</Text>
                    <Feather name="book" size={35} color="black" />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.drawingPostPageResize}>

                <View style={styles.drawingPostPageResizeIconBox}>
                  <TouchableOpacity
                    onPress={_ => {
                      if (photo !== "") {
                        setPhotoResize("cover")
                      }
                      else {
                        ToastAndroid.showWithGravity(
                          "Please Upload an Image",
                          ToastAndroid.SHORT,
                          ToastAndroid.CENTER
                        );
                      }
                    }}>
                    <Feather name="maximize-2" size={26} color="black" />
                  </TouchableOpacity>
                </View>

                <View style={styles.drawingPostPageResizeIconBox}>
                  <TouchableOpacity
                    onPress={_ => {

                      if (photo !== "") {
                        setPhotoResize("stretch")
                      }
                      else {
                        ToastAndroid.showWithGravity(
                          "Please Upload an Image",
                          ToastAndroid.SHORT,
                          ToastAndroid.CENTER
                        );
                      }
                    }}>
                    <Feather name="maximize" size={26} color="black" />
                  </TouchableOpacity>

                </View>

                <View style={styles.drawingPostPageResizeIconBox}>
                  <TouchableOpacity
                    onPress={_ => {
                      if (photo !== "") {
                        setPhotoResize("contain")
                      }
                      else {
                        ToastAndroid.showWithGravity(
                          "Please Upload an Image",
                          ToastAndroid.SHORT,
                          ToastAndroid.CENTER
                        );
                      }

                    }}>
                    <Feather name="minimize" size={26} color="black" />
                  </TouchableOpacity>

                </View>
              </View>
            </View>


            {/* category box */}
            <View style={styles.emptyPostPageCategoryInputBox}>
              <Pressable onPress={_ => { categorySelection('love') }}>

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

              <Pressable
                onPress={_ => { categorySelection('longing') }} >
                <View style={styles.categoryInputItem}>
                  <Fontisto name="heartbeat-alt" size={22} color={
                    categories.includes('longing') ? "black" : "#bebebe"} />
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
                </View>
              </Pressable>


              <Pressable onPress={_ => { categorySelection('sadness') }}>

                <View style={styles.categoryInputItem}>
                  <Feather name="frown" size={22} color={
                    categories.includes('sadness') ? "black" : "#bebebe"} />
                  {
                    categories.includes('sadness') ?
                      <View style={styles.categoryInputItemTextBox}>
                        <Text style={styles.categoryInputItemEnabledText}>SADNESS</Text>
                      </View>
                      :
                      <View style={styles.categoryInputItemTextBox}>
                        <Text style={styles.categoryInputItemText}>SADNESS</Text>
                      </View>
                  }
                </View>
              </Pressable>

              <Pressable onPress={_ => { categorySelection('happiness') }}>


                <View style={styles.categoryInputItem}>
                  <Feather name="smile" size={22} color={
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
              <Pressable onPress={_ => { categorySelection('nature') }}>
                <View style={styles.categoryInputItem}>
                  <Feather name="feather" size={22} color={
                    categories.includes('nature') ? "black" : "#bebebe"} />
                  {
                    categories.includes('nature') ?
                      <View style={styles.categoryInputItemTextBox}>
                        <Text style={styles.categoryInputItemEnabledText}>NATURE</Text>
                      </View>
                      :
                      <View style={styles.categoryInputItemTextBox}>
                        <Text style={styles.categoryInputItemText}>NATURE</Text>
                      </View>
                  }
                </View>
              </Pressable>
              <Pressable onPress={_ => { categorySelection('animals') }}>
                <View style={styles.categoryInputItem}>
                  <Fontisto name="paw" size={22} color={
                    categories.includes('animals') ? "black" : "#bebebe"} />
                  {
                    categories.includes('animals') ?
                      <View style={styles.categoryInputItemTextBox}>
                        <Text style={styles.categoryInputItemEnabledText}>ANIMALS</Text>
                      </View>
                      :
                      <View style={styles.categoryInputItemTextBox}>
                        <Text style={styles.categoryInputItemText}>ANIMALS</Text>
                      </View>
                  }
                </View>
              </Pressable>
              <Pressable onPress={_ => { categorySelection('other') }}>
                <View style={styles.categoryInputItem}>
                  <Feather name="arrow-up-circle" size={22} color={
                    categories.includes('other') ? "black" : "#bebebe"} />
                  {
                    categories.includes('other') ?
                      <View style={styles.categoryInputItemTextBox}>
                        <Text style={styles.categoryInputItemEnabledText}>OTHER</Text>
                      </View>
                      :
                      <View style={styles.categoryInputItemTextBox}>
                        <Text style={styles.categoryInputItemText}>OTHER</Text>
                      </View>
                  }
                </View>
              </Pressable>
            </View>
          </View>

          {/* Preview */}
          <View style={styles.drawingPostPagePreviewBox}>
            <View style={styles.drawingPostPagePreview}>
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
              {
                (photo === "" && title === "") ?
                  <View style={styles.drawingPostPageEmptyPreview}>
                    <Text style={styles.drawingPostPageEmptyPreviewText}>
                      PREVIEW
                    </Text>
                  </View>
                  :
                  <View style={styles.postContent}>
                    <View style={styles.drawingPostTitleArea}>
                      <Text style={styles.drawingPostTitleText}>{title}</Text>
                    </View>

                    {
                      photo ? <Image
                        resizeMode={photoResize}
                        source={{ uri: photo }}
                        style={styles.photo} /> : null
                    }



                  </View>
              }

            </View>
            <View style={styles.emptyPostPagePreviewTextBox}>
              <Text style={styles.emptyPostPagePreviewText}>
                PREVIEW POST
              </Text>
            </View>
          </View>
        </View>

      </View >
    </TouchableWithoutFeedback>
  )
}

export default DrawingPostPage
