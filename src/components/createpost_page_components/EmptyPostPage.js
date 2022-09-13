import {
    Text,
    TouchableOpacity,
    ToastAndroid,
    View,
    KeyboardAvoidingView,
    TextInput,
    ScrollView,
    Keyboard,
    Pressable,
    TouchableWithoutFeedback
} from 'react-native'
import React, { useState } from 'react'

import styles from '../../styles/createpost_page_styles'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwasome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialDesign from 'react-native-vector-icons/MaterialIcons'


const EmptyPostPage = ({ navigation }) => {

    const [contentValue, setContentValue] = useState("")
    const [titleValue, setTitleValue] = useState("")
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
                        <FontAwasome5 name="pencil-alt" size={21} color="#463cfb" />

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
                                    setTitleValue(text)
                                }}
                            />

                            <TextInput
                                style={styles.emptyPostPageContentInput}
                                multiline
                                placeholder="CONTENT"
                                numberOfLines={20}
                                placeholderTextColor="grey"
                                onChangeText={(text) => {
                                    setContentValue(text)
                                }}
                            />

                        </View>
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
                                    <Text style={styles.poemPostTitleText}>{titleValue}</Text>
                                </View>

                                <View style={styles.postContentBox}>
                                    <Text style={styles.poemPostContentText}>{contentValue}</Text>
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

export default EmptyPostPage
