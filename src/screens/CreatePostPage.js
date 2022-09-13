import { TouchableOpacity, SafeAreaView, Text, Image, Pressable,Dimensions, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import FontAwasome5 from 'react-native-vector-icons/FontAwesome5'

import styles from '../styles/createpost_page_styles'
import AppBar from '../components/createpost_page_components/AppBar'

const CreatePostPage = ({ navigation }) => {
    const headerText = "CREATE\nPOST"
    const emptyPostText = "CREATE\nAN\nEMPTY\nPOST"
    const poemPostText = "CREATE\nA\nPOEM\nPOST"
    const drawingPostText = "CREATE\nA\nDRAWING\nPOST"
    return (
        <SafeAreaView style={styles.createPostPage}>
            <AppBar navigation={navigation}/>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    {headerText}
                </Text>
            </View>
            <View style={styles.createPostSelection}>
                <View style={styles.createPostSelectionRow}>
                    <Pressable onPress={_ => { navigation.navigate("EmptyPostPage") }}>
                        <View style={styles.createPostSelectionRowBox}>
                            <Text style={styles.createPostSelectionText}>
                                {emptyPostText}
                            </Text>
                            <FontAwasome5 name="pencil-alt" size={27} color="black" />
                        </View>
                    </Pressable>
                    <Pressable onPress={_ => { navigation.navigate("PoemPostPage") }}>
                        <View style={styles.createPostSelectionRowBox}>
                            <Text style={styles.createPostSelectionText}>
                                {poemPostText}
                            </Text>
                            <FontAwasome5 name="bars" size={27} color="black" />
                        </View>
                    </Pressable>
                </View>
                <View style={styles.createPostSelectionCol}>
                    <Pressable onPress={_ => { navigation.navigate("DrawingPostPage") }}>
                        <View style={styles.createPostSelectionColBox}>
                            <Feather name="image" size={27} color="black" />
                            <Text style={styles.createDrawingPostSelectionText}>
                                {drawingPostText}
                            </Text>
                        </View>

                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CreatePostPage

// old version of create post page
/* const CreatePostPageOldVersion = ({ navigation }) => {
    const { height, width } = Dimensions.get("window")
    return (
        <SafeAreaView style={styles.createPostPage}>
            <Image style={styles.leftImage} source={require('../../assets/imgs/left-2.png')} />
            <Image style={styles.middleImage} source={require('../../assets/imgs/middle.jpg')} />
            <Image style={styles.rightImage} source={require('../../assets/imgs/right-2.jpg')} />
            <View style={styles.imageTextBoxes}>
                <View style={styles.leftArea}>
                    <View style={styles.createPostPageExitBox}>
                        <View style={styles.createPostPageXiconBox}>
                            <TouchableOpacity
                                onPress={_ => {
                                    navigation.navigate("HomePage")
                                }}>
                                <Feather name="x" size={30} color="white" />

                            </TouchableOpacity>

                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={_ => {
                            navigation.navigate("EmptyPostPage")
                        }}>

                        <View style={styles.imageTextBox}>
                            <View style={styles.imageTextArea}>
                                <Text style={styles.imageText}>
                                    CREATE
                                </Text>
                                <Text style={styles.imageText}>
                                    AN
                                </Text>
                                <Text style={styles.imageText}>
                                    EMPTY
                                </Text>
                                <Text style={styles.imageText}>
                                    POST
                                </Text>
                            </View>
                            <View style={styles.imageTextIconBox}>
                                <Feather name="pen-tool" size={30} color="grey" />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.createPostPageExitBox} />
                </View>
                <TouchableOpacity
                    onPress={_ => {
                        navigation.navigate("PoemPostPage")
                    }}>
                    <View style={styles.imageTextBox}>
                        <View style={styles.imageTextArea}>
                            <Text style={styles.imageText}>
                                CREATE
                            </Text>
                            <Text style={styles.imageText}>
                                AN
                            </Text>
                            <Text style={styles.imageText}>
                                POEM
                            </Text>
                            <Text style={styles.imageText}>
                                POST
                            </Text>
                        </View>
                        <View style={styles.imageTextIconBox}>
                            <Feather name="align-justify" size={30} color="grey" />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={_ => {
                        navigation.navigate("DrawingPostPage")
                    }}>
                    <View style={styles.imageTextBox}>
                        <View style={styles.imageTextArea}>
                            <Text style={styles.imageText}>
                                CREATE
                            </Text>
                            <Text style={styles.imageText}>
                                A
                            </Text>
                            <Text style={styles.imageText}>
                                DRAWING
                            </Text>
                            <Text style={styles.imageText}>
                                POST
                            </Text>
                        </View>
                        <View style={styles.imageTextIconBox}>
                            <Feather name="image" size={30} color="grey" />
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
} */
