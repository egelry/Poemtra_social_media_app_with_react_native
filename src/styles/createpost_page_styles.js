import { StyleSheet, Dimensions } from "react-native"

const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({

    // Create Post Page
    createPostPage: {
        height,
        width,
        backgroundColor: "white",

    },

    // appbar
    appBar: {
        height: height * .1,
        width,
        justifyContent: "center",
        paddingLeft: 20
    },

    // header
    header: {
        height: height * .22,
        width,
        paddingLeft: 20,
        justifyContent: "center"
    },
    headerText: {
        fontSize: 50,
        color: "#463cfb",
        fontFamily: "LeagueSpartan-Bold",
        letterSpacing: 3.5,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5

    },

    // createPostSelection
    createPostSelection: {
        height: height * 0.68,
        width,
        backgroundColor: "white",
    },
    createPostSelectionRow: {
        height: height * 0.325,
        width,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    createPostSelectionRowBox: {
        height: height * 0.3,
        width: width * 0.455,
        backgroundColor: "white",
        shadowOffset: { width: 7, height: 7 },
        shadowColor: 'black',
        shadowOpacity: 0.7,
        elevation: 5,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    createPostSelectionCol: {
        height: height * 0.325,
        width,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    createPostSelectionColBox: {
        height: height * 0.3,
        width: width * 0.94,
        backgroundColor: "white",
        shadowOffset: { width: 7, height: 7 },
        shadowColor: 'black',
        shadowOpacity: 0.7,
        elevation: 5,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },
    createPostSelectionText: {
        fontSize: 24,
        color: "#bebebe",
        textAlign: "center",
        marginBottom: 10,
        letterSpacing: 1,
        fontFamily: "LeagueSpartan-Bold",

    },
    createDrawingPostSelectionText: {
        fontSize: 24,
        letterSpacing: 1,
        color: "#bebebe",
        textAlign: "center",
        marginLeft: 20,
        fontFamily: "LeagueSpartan-Bold",

    },

    // empty post page
    emptyPostPage: {

        flex: 1,
        backgroundColor: "white",
    },
    // empty post page  appbar
    emptyPostPageAppBar: {
        height: height * .1,
        width,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    emptyPostPageArrowLeftBox: {
        marginLeft: 10,
    },
    emptyPostPagePostTypeBox: {
        height: height * .065,
        width: height * .065,
        borderRadius: ((height * .08) / 2),
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    //empty post page content 
    emptyPostPageContent: {
        height: height * .9,
        width,
    },
    textInputsArea: {
        height: height * .42,
        width,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    titleAndContentInputBox: {
        height: height * .42,
        width: width * 0.6,
        justifyContent: "space-between",
        borderRadius: 10,
    },

    emptyPostPageTitleInput: {
        width: width * 0.6,
        height: height * 0.075,
        paddingLeft: 15,
        borderRadius: 25,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: "white",
        fontFamily: "LeagueSpartan-Bold",
        letterSpacing: 1.3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
        borderBottomWidth: 0
    },
    emptyPostPageContentInput: {
        width: width * 0.6,
        maxHeight: height * 0.33,
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 12,
        letterSpacing: 1.1,
        fontFamily: "LeagueSpartan-Medium",
        textAlignVertical: 'top',
        borderRadius: 25,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignSelf: "center",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    emptyPostPageCategoryInputBox: {
        height: height * .42,
        width: width * 0.3,
        borderRadius: 25,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,

    },

    categoryInputItem: {
        height: height * .06,
        width: width * 0.3,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius: 25
    },

    categoryInputItemTextBox: {
        width: width * 0.18,

    },

    categoryInputItemText: {
        fontSize: 11,
        color: "#313131",
        fontFamily: "LeagueSpartan-Thin",
        letterSpacing: 1,
    },
    categoryInputItemEnabledText: {
        fontSize: 11,
        color: "black",
        fontFamily: "LeagueSpartan-Bold",
        letterSpacing: 1,
    },
    emptyPostPagePreviewBox: {
        height: height * 0.48,
        alignItems: "center",
        width,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    emptyPostPagePreview: {
        height: height * 0.4,
        width: width * 0.75,
        backgroundColor: "white",
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    emptyPostPagePreviewTextBox: {
        height: height * 0.48,
        width: width * 0.15,
        alignItems: "center",
        justifyContent: "center",

    },
    emptyPostPagePreviewText: {
        transform: [{ rotate: '90deg' }],
        width: height * 0.4,
        letterSpacing: 4,
        alignItems: "center",
        justifyContent: "center",
        color: "#d9d9d9",
        fontSize: 31,
        fontFamily: "LeagueSpartan-ExtraBold",

    },

    // poem post page
    categoryAndToolBox: {
        height: height * .42,
        borderRadius: 25,
        justifyContent: "space-between"
    },
    poemPostPageToolBox: {
        height: height * .1,
        width: width * 0.3,
        borderRadius: 25,
        flexDirection: "row",
        justifyContent: "space-between",

    },
    poemPostPageAddLineBox: {
        height: height * .1,
        width: width * 0.14,
        backgroundColor: "white",
        justifyContent: "space-evenly",
        shadowColor: "#000",
        borderRadius: 25,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6.30,
        elevation: 13,

    },
    poemPostPageCategoryInputBox: {
        height: height * .3,
        width: width * 0.3,
        borderRadius: 25,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,

    },
    poemPostPageAddParagraph: {
        height: height * .1,
        width: width * 0.14,
        backgroundColor: "white",
        borderRadius: 25,
        justifyContent: "space-evenly",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6.30,
        elevation: 13,

    },
    poemPostPageAddLineIconBox: {
        height: height * 0.05,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    poemPostPageRemoveLineIconBox: {
        height: height * 0.05,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    poemPostToolsDivider: {
        height: 2,
        width: width * 0.14,
        backgroundColor: "#d9d9d9"
    },
    poemPostPageAddLineLText: {
        fontSize: 16,
    },

    //drawing post page
    takePhotoBox: {
        height: height * 0.225,
        width: width * 0.3,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 2,
    },
    openLibraryBox: {
        height: height * 0.225,
        width: width * 0.3,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 2,
    },
    photoText: {
        fontSize: 21,
        textAlign: 'center',
        fontFamily: "LeagueSpartan-Bold",
        letterSpacing: 1,
        marginBottom: 10,
        color: "#bebebe",

    },
    drawingPostPageLeftSide: {
        height: height * 0.42,
        justifyContent: "space-between"

    },
    drawingPostPageCategoryInputBox: {
        height: height * .42,
        width: width * 0.3,
        borderRadius: 25,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,

    },
    drawingPostPageResize: {
        height: height * 0.08,
        width: width * 0.6,
        borderRadius: 20,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 3,
        backgroundColor: "white",
        flexDirection: "row",
    },

    drawingPostPageResizeIconBox: {
        width: width * 0.2,
        alignItems: "center",
        justifyContent: "center"
    },
    drawingPostPagePreviewBox: {
        height: height * 0.48,
        paddingTop: height * 0.02,
        width,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    drawingPostPagePreview: {
        height: height * 0.44,
        width: width * 0.75,
        backgroundColor: "white",
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    drawingPostTitleArea: {
        height: height * 0.06,
        justifyContent: "center"
    },

    drawingPostTitleText: {
        marginLeft: 10,
        fontSize: 16,
        fontFamily: "LeagueSpartan-ExtraBold",
        letterSpacing: 0.7,
        color: "black"

    },
    drawingPostPageEmptyPreview: {
        height: height * 0.3,
        width: width * 0.75,
        alignSelf: "center",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    drawingPostPageEmptyPreviewText: {
        fontSize: 21,
        fontFamily: "LeagueSpartan-Bold",
        letterSpacing: 1,
        marginBottom: 10,
        color: "#bebebe",
    },
    photoContentBox: {
        width: width * 0.6,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 10,

    },
    photo: {
        height: height * 0.28,
        width: width * 0.75,
    },

    //post 
    posts: {
        height,
        width,
        backgroundColor: "white"
    },

    //post
    post: {
        alignSelf: "center",
        height: height * 0.4,
        width: width * 0.95,
        backgroundColor: "white",
        marginTop: 10,
        borderRadius: 15,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 3,
        backgroundColor: "white",
    },

    // post header
    postHeader: {
        height: height * 0.1,
        width: width * 0.75,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    userPpBox: {
        height: height * 0.065,
        width: height * 0.065,
        borderRadius: ((height * 0.065) / 2),
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 4,
        borderColor: "#0F52BA"
    },
    postPpAndName: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10
    },
    userNameBox: {
        marginLeft: 10,
        height: height * 0.1,
        justifyContent: "center",
    },
    userNameText: {
        fontSize: 16,
        fontFamily: "LeagueSpartan-Bold",
        color: "#666666"
    },
    postDateBox: {
        height: height * 0.1,
        width: ((width * 0.2) + 10),
        alignItems: "flex-start",
        justifyContent: "center",
    },
    postDateText: {
        fontFamily: "LeagueSpartan-Medium",
        color: "#d9d9d9"
    },

    // post content
    postContent: {
        height: height * 0.3,
        width: width * 0.75,
        alignSelf: "center",

        backgroundColor: "white",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,

    },
    postTitleBox: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        marginBottom: 5
    },
    postContentBox: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 15,
    },
    poemPostTitleText: {
        fontSize: 16,
        fontFamily: "LeagueSpartan-ExtraBold",
        letterSpacing: 0.7,
        color: "black"

    },
    poemPostContentText: {
        fontSize: 13,
        fontFamily: "LeagueSpartan-Bold",
        letterSpacing: 0.7,
        color: "#666666"

    },




})




export default styles

const styles_old_v = StyleSheet.create({

    // Create Post Page
    createPostPage: {
        height,
        width,
        flexDirection: "row"
    },

    // Images
    leftImage: {
        height,
        width: width * 0.33
    },
    middleImage: {
        height,
        width: width * 0.34
    },
    rightImage: {
        height,
        width: width * 0.33
    },

    //Image Text Boxes
    imageTextBoxes: {
        position: "absolute",
        height,
        width,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row"
    },
    imageTextBox: {
        width: width * 0.3,
        height: height * 0.3,
        backgroundColor: "white",
        borderRadius: 15,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    imageTextArea: {
        height: height * 0.2,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    imageTextIconBox: {
        height: height * 0.08,
        marginTop: 6,
    },
    imageText: {
        fontSize: 16,
        color: "#4169E1",
        fontFamily: "LeagueSpartan-ExtraBold",
        letterSpacing: 3.5,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 2
    },
    createPostPageExitBox: {
        height: height * .1

    },
    createPostPageXiconBox: {
        marginLeft: 10,
        marginTop: 10
    },
    leftArea: {
        height,
        justifyContent: "space-between"
    },



    // empty post page
    emptyPostPage: {

        flex: 1,
        backgroundColor: "white",
    },
    // empty post page  appbar
    emptyPostPageAppBar: {
        height: height * .1,
        width,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    emptyPostPageArrowLeftBox: {
        marginLeft: 10,
    },
    emptyPostPagePostTypeBox: {
        height: height * .08,
        width: height * .08,
        borderRadius: ((height * .08) / 2),
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    //empty post page content 
    emptyPostPageContent: {
        height: height * .9,
        width,
    },
    textInputsArea: {
        height: height * .42,
        width,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    titleAndContentInputBox: {
        height: height * .42,
        width: width * 0.6,
        justifyContent: "space-between",
        borderRadius: 10,
    },

    emptyPostPageTitleInput: {
        width: width * 0.6,
        height: height * 0.075,
        paddingLeft: 15,
        borderRadius: 25,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: "white",
        fontFamily: "LeagueSpartan-Bold",
        letterSpacing: 1.3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
        borderBottomWidth: 0
    },
    emptyPostPageContentInput: {
        width: width * 0.6,
        maxHeight: height * 0.33,
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 12,
        letterSpacing: 1.1,
        fontFamily: "LeagueSpartan-Medium",
        textAlignVertical: 'top',
        borderRadius: 25,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignSelf: "center",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    emptyPostPageCategoryInputBox: {
        height: height * .42,
        width: width * 0.3,
        borderRadius: 25,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,

    },
    categoryInputItem: {
        height: height * .06,
        width: width * 0.3,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius: 25
    },
    categoryInputItemText: {
        fontSize: 12,
        color: "black",
        fontFamily: "LeagueSpartan-Thin",
        letterSpacing: 1,

    },
    emptyPostPagePreviewBox: {
        height: height * 0.48,
        alignItems: "center",
        width,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    emptyPostPagePreview: {
        height: height * 0.4,
        width: width * 0.75,
        backgroundColor: "white",
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    emptyPostPagePreviewTextBox: {
        height: height * 0.48,
        width: width * 0.15,
        alignItems: "center",
        justifyContent: "center",

    },
    emptyPostPagePreviewText: {
        transform: [{ rotate: '90deg' }],
        width: height * 0.4,
        letterSpacing: 4,
        alignItems: "center",
        justifyContent: "center",
        color: "#d9d9d9",
        fontSize: 31,
        fontFamily: "LeagueSpartan-ExtraBold",

    },

    // poem post page
    categoryAndToolBox: {
        height: height * .42,
        borderRadius: 25,
        justifyContent: "space-between"
    },
    poemPostPageToolBox: {
        height: height * .1,
        width: width * 0.3,
        borderRadius: 25,
        flexDirection: "row",
        justifyContent: "space-between",

    },
    poemPostPageAddLineBox: {
        height: height * .1,
        width: width * 0.14,
        backgroundColor: "white",
        justifyContent: "space-evenly",
        shadowColor: "#000",
        borderRadius: 25,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6.30,
        elevation: 13,

    },
    poemPostPageCategoryInputBox: {
        height: height * .3,
        width: width * 0.3,
        borderRadius: 25,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,

    },
    poemPostPageAddParagraph: {
        height: height * .1,
        width: width * 0.14,
        backgroundColor: "white",
        borderRadius: 25,
        justifyContent: "space-evenly",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6.30,
        elevation: 13,

    },
    poemPostPageAddLineIconBox: {
        height: height * 0.05,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    poemPostPageRemoveLineIconBox: {
        height: height * 0.05,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    poemPostToolsDivider: {
        height: 2,
        width: width * 0.14,
        backgroundColor: "#d9d9d9"
    },
    poemPostPageAddLineLText: {
        fontSize: 16,
    },

    //drawing post page
    takePhotoBox: {
        height: height * 0.225,
        width: width * 0.3,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 2,
    },
    openLibraryBox: {
        height: height * 0.225,
        width: width * 0.3,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 2,
    },
    photoText: {
        fontSize: 21,
        textAlign: 'center',
        fontFamily: "LeagueSpartan-Bold",
        letterSpacing: 1,
        marginBottom: 10,
        color: "#bebebe",

    },
    drawingPostPageLeftSide: {
        height: height * 0.42,
        justifyContent: "space-between"

    },
    drawingPostPageCategoryInputBox: {
        height: height * .42,
        width: width * 0.3,
        borderRadius: 25,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,

    },
    drawingPostPageResize: {
        height: height * 0.08,
        width: width * 0.6,
        borderRadius: 20,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 3,
        backgroundColor: "white",
        flexDirection: "row",
    },

    drawingPostPageResizeIconBox: {
        width: width * 0.2,
        alignItems: "center",
        justifyContent: "center"
    },
    drawingPostPagePreviewBox: {
        height: height * 0.48,
        paddingTop: height * 0.02,
        width,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    drawingPostPagePreview: {
        height: height * 0.44,
        width: width * 0.75,
        backgroundColor: "white",
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    drawingPostTitleArea: {
        height: height * 0.06,
        justifyContent: "center"
    },

    drawingPostTitleText: {
        marginLeft: 10,
        fontSize: 16,
        fontFamily: "LeagueSpartan-ExtraBold",
        letterSpacing: 0.7,
        color: "black"

    },
    drawingPostPageEmptyPreview: {
        height: height * 0.3,
        width: width * 0.75,
        alignSelf: "center",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    drawingPostPageEmptyPreviewText: {
        fontSize: 21,
        fontFamily: "LeagueSpartan-Bold",
        letterSpacing: 1,
        marginBottom: 10,
        color: "#bebebe",
    },
    photoContentBox: {
        width: width * 0.6,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 10,

    },
    photo: {
        height: height * 0.28,
        width: width * 0.75,
    },

    //post 
    posts: {
        height,
        width,
        backgroundColor: "white"
    },

    //post
    post: {
        alignSelf: "center",
        height: height * 0.4,
        width: width * 0.95,
        backgroundColor: "white",
        marginTop: 10,
        borderRadius: 15,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 3,
        backgroundColor: "white",
    },

    // post header
    postHeader: {
        height: height * 0.1,
        width: width * 0.75,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    userPpBox: {
        height: height * 0.07,
        width: height * 0.07,
        borderRadius: ((height * 0.07) / 2),
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 4,
        borderColor: "#0F52BA"
    },
    postPpAndName: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10
    },
    userNameBox: {
        marginLeft: 10,
        height: height * 0.1,
        justifyContent: "center",
    },

    postDateBox: {
        height: height * 0.1,
        width: ((width * 0.2) + 10),
        alignItems: "center",
        justifyContent: "center",
    },
    postDateText: {
        fontSize: 16,
        fontFamily: "LeagueSpartan-Medium",
        color: "#d9d9d9"
    },

    // post content
    postContent: {
        height: height * 0.3,
        width: width * 0.75,
        alignSelf: "center",

        backgroundColor: "white",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,

    },
    postTitleBox: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        marginBottom: 5
    },
    postContentBox: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 15,
    },
    poemPostTitleText: {
        fontSize: 16,
        fontFamily: "LeagueSpartan-ExtraBold",
        letterSpacing: 0.7,
        color: "black"

    },
    poemPostContentText: {
        fontSize: 13,
        fontFamily: "LeagueSpartan-Bold",
        letterSpacing: 0.7,
        color: "#666666"

    },
})

const stylesExtended = StyleSheet.create({

    // Create Post Page
    xcreatePostPage: {
        height,
        width,
        flexDirection: "row"
    },
    // Images
    xleftImage: {
        height,
        width: width * 0.33
    },
    xmiddleImage: {
        height,
        width: width * 0.34
    },
    xrightImage: {
        height,
        width: width * 0.33
    },

    //Image Text Boxes
    ximageTextBoxes: {
        position: "absolute",
        height,
        width,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row"
    },
    ximageTextBox: {
        width: width * 0.3,
        height: height * 0.3,
        backgroundColor: "white",
        borderRadius: 15,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    ximageTextArea: {
        height: height * 0.2,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    ximageTextIconBox: {
        height: height * 0.08,
    },
    ximageText: {
        fontSize: 16,
        color: "#4169E1",
        fontFamily: "LeagueSpartan-ExtraBold",
        letterSpacing: 3.5,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 2
    },
    xemptyPostPage: {
        height: height * 1,
    },
    // post page app bar
    xpostPageAppBar: {
        height: height * .1,
        width,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },

    xpostPageAppBarFlex: {
        flexDirection: "row",
        marginRight: 10,
        alignItems: "center",
    },
    xpostPageAppBarArrow: {
        marginLeft: 10
    },
    xpostPageAppBarText: {
        marginRight: 10,
        fontSize: 22,
        color: "#4169E1",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5
    },
    xpostPageAppBarIcon: {
        marginTop: 5
    },
    xappBarDivider: {
        position: "absolute",
        height: 1,
        width,
        backgroundColor: "#C0C0C0",
        alignSelf: "flex-end"
    },

    //empty post page content
    xemptyPostPageContent: {
        height: height * .9,
        justifyContent: "center",
        alignItems: "center"
    },
    xemptyPostPageContentBox: {
        height: height * .8,
        width: width * .8,
        backgroundColor: "white",
        borderRadius: 15,
        shadowOffset: { width: 20, height: 20 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 10,
    },
    xemptyPostPageTitleTextAndIcon: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#5b86e5",
        width: width * 0.8
    },
    xemptyPostPageTitleBox: {
        height: height * 0.2,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    xemptyPostPageTitleText: {
        fontSize: 30,
        marginHorizontal: 10,
        fontSize: 22,
        color: "white",
        letterSpacing: 3,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5,
    },
    xtitleInput: {
        width: width * 0.7,
        height: 40,
        margin: 10,
        paddingLeft: 15,
        fontSize: 12,
        fontFamily: "LeagueSpartan-Medium",
        borderWidth: 1,
        borderRadius: 5,
        alignSelf: "center",
        backgroundColor: "white",
        borderColor: "grey"
    },
    xemptyPostPageDetailBox: {
        height: height * .5,
    },
    xemptyPostPageContentText: {
        fontSize: 20,
        alignSelf: "center",
        color: "white",
        marginHorizontal: 10,
        letterSpacing: 3,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5
    },
    xdetailInput: {
        maxHeight: height * 0.45,
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        marginTop: 8,
        overflow: "hidden",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderRadius: 10,
        padding: 0,
        borderWidth: 1,
        backgroundColor: "#e3e3e3",
        fontSize: 13,
        fontFamily: "LeagueSpartan-Bold",
        backgroundColor: "white",
        borderColor: "grey"
    },

    xemptyPostPageButtonBox: {
        height: height * .1,
        alignItems: "center",
        justifyContent: "center"

    },

    // Poem Post Page
    xpostPageContentAndToolBox: {
        flexDirection: "row",
        width,
        justifyContent: "space-between",
        alignItems: "center"
    },
    xpoemPostPageContent: {
        height: height * .9,
        backgroundColor: "blue",
        justifyContent: "center"
    },
    xpostPageToolBox: {
        height: 100,
        width: width * .1,
    },
    xpoemDetailInput: {
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        marginTop: 8,
        overflow: "hidden",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderRadius: 10,
        padding: 0,
        borderWidth: 1,
        backgroundColor: "#e3e3e3",
        fontSize: 13,
        fontFamily: "LeagueSpartan-Bold",
        backgroundColor: "white",
        borderColor: "grey"
    },


    // Share Button
    xpostPageButton: {
        width: width * 0.7,
        height: height * 0.055,
        backgroundColor: "#5b86e5",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    xpostPageButtonText: {
        fontFamily: "LeagueSpartan-Bold",
        letterSpacing: 1.3,
        color: "white"
    },
    xpostPageAppBarText: {
        marginRight: 10,
        fontSize: 22,
        color: "#4169E1",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5
    },
    xpostPageAppBarIcon: {
        marginTop: 5
    },
    xappBarDivider: {
        position: "absolute",
        height: 1,
        width,
        backgroundColor: "#C0C0C0",
        alignSelf: "flex-end"
    },

    //empty post page content
    xemptyPostPageContent: {
        height: height * .9,
        justifyContent: "center",
        alignItems: "center"
    },
    xemptyPostPageContentBox: {
        height: height * .8,
        width: width * .8,
        backgroundColor: "white",
        borderRadius: 15,
        shadowOffset: { width: 20, height: 20 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 10,
    },
    xemptyPostPageTitleTextAndIcon: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#5b86e5",
        width: width * 0.8
    },
    xemptyPostPageTitleBox: {
        height: height * 0.2,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    xemptyPostPageTitleText: {
        fontSize: 30,
        marginHorizontal: 10,
        fontSize: 22,
        color: "white",
        letterSpacing: 3,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5,
    },
    xtitleInput: {
        width: width * 0.7,
        height: 40,
        margin: 10,
        paddingLeft: 15,
        fontSize: 12,
        fontFamily: "LeagueSpartan-Medium",
        borderWidth: 1,
        borderRadius: 5,
        alignSelf: "center",
        backgroundColor: "white",
        borderColor: "grey"
    },
    xemptyPostPageDetailBox: {
        height: height * .5,
    },
    xemptyPostPageContentText: {
        fontSize: 20,
        alignSelf: "center",
        color: "white",
        marginHorizontal: 10,
        letterSpacing: 3,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5
    },
    xdetailInput: {
        maxHeight: height * 0.45,
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        marginTop: 8,
        overflow: "hidden",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderRadius: 10,
        padding: 0,
        borderWidth: 1,
        backgroundColor: "#e3e3e3",
        fontSize: 13,
        fontFamily: "LeagueSpartan-Bold",
        backgroundColor: "white",
        borderColor: "grey"
    },

    xemptyPostPageButtonBox: {
        height: height * .1,
        alignItems: "center",
        justifyContent: "center"

    },

    // Poem Post Page
    xpostPageContentAndToolBox: {
        flexDirection: "row",
        width,
        justifyContent: "space-between",
        alignItems: "center"
    },
    xpoemPostPageContent: {
        height: height * .9,
        backgroundColor: "blue",
        justifyContent: "center"
    },
    xpostPageToolBox: {
        height: 100,
        width: width * .1,
    },
    xpoemDetailInput: {
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        marginTop: 8,
        overflow: "hidden",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderRadius: 10,
        padding: 0,
        borderWidth: 1,
        backgroundColor: "#e3e3e3",
        fontSize: 13,
        fontFamily: "LeagueSpartan-Bold",
        backgroundColor: "white",
        borderColor: "grey"
    },


})