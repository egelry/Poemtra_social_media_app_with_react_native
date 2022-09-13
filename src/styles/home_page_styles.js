import { StyleSheet, Dimensions } from "react-native"

const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({

    // Home Page
    homePage: {
        height,
        width,
    },

    // App Bar => poemtra text
    appBar: {
        height: height * .1,
        width,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "center",

    },
    appBarPoemtraText: {
        fontSize: 35,
        color: "#5b86e5",
        alignSelf: "center",
        fontFamily: "LeagueSpartan-Bold",
        letterSpacing: 3.5,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5

    },
    divider: {
        backgroundColor: "#C0C0C0",
        alignSelf: "flex-end",
        position: "absolute",
        height: 1,
        width: width * 0.95
    },

    // Explore or main current
    explorOrMainCurrent: {
        height: height * 0.05,
        width,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "white",
    },
    exploreOrMainCurrentDivider: {
        width: 2,
        height: height * 0.04,
        backgroundColor: "#d9d9d9"
    },
    explorOrMainCurrentText: {
        fontSize: 16,
        fontFamily: "LeagueSpartan-Bold",
        color: "black"
    },
    explorOrMainCurrentBox: {
        height: height * 0.04,
        width: width * 0.4,
        alignItems: "center",
        justifyContent: "center",
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 3,
        elevation: 5,
        backgroundColor: "white",
    },
    explorOrMainCurrentDisabledBox: {
        height: height * 0.04,
        width: width * 0.4,
        alignItems: "center",
        justifyContent: "center",
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'grey',
        shadowOpacity: 3,
        elevation: 5,
        backgroundColor: "white",
    },
    explorOrMainCurrentDisabledText: {
        fontSize: 16,
        fontFamily: "LeagueSpartan-Bold",
        color: "#bebebe"
    },

    // Posts
    posts: {
        height,
        width,
        backgroundColor: "white",
    },

    //post
    post: {
        alignSelf: "center",
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
    postSpace: {
        height: height * .15
    },

    // post header
    postHeader: {
        height: height * 0.1,
        width: width * 0.9,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    userPpBox: {
        height: height * 0.07,
        width: height * 0.07,
        borderRadius: ((height * 0.07) / 2),
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 4,
        borderColor: "#0F52BA"
    },
    userNameBox: {
        marginLeft: 10,
        height: height * 0.1,
        width: width * 0.53,
        justifyContent: "center",
    },
    userNameText: {
        fontSize: 20,
        fontFamily: "LeagueSpartan-Bold",
        color: "#757575"
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
        color: "#757575"
    },

    // post content
    postContent: {
        width: width * 0.9,
        alignSelf: "center",
        marginBottom: 5,

    },
    postContentTitleBox: {
        height: height * 0.047,
        width: width * 0.9,
        justifyContent: "flex-start"
    },
    postContentTitleText: {
        fontSize: 18,
        marginLeft: 10,
        fontFamily: "LeagueSpartan-Bold",
        color: "black"
    },
    postContentPageImageBox: {
        backgroundColor: "white"

    },
    postContentPageImage: {
        height: height * 0.4,
        marginTop: 5,
    },
    postContentPageContentRes: {
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 10,
    },
    postContentPageContentText: {
        fontSize: 15,
        fontFamily: "LeagueSpartan-Medium",
        color: "#313131",
    },

    //footer
    postDetailPageFooter: {
        width: width * 0.8,
        backgroundColor: "white",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,

    },
    postDetailPageFooterLike: {
        height: height * 0.07,
        width: width * 0.75,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 20
    },
    postDetailPageFooterLikeText: {
        fontSize: 18,
        marginLeft: 10,
        fontFamily: "LeagueSpartan-Bold",
        color: "#313131"
    },
    postDetailPageFooterCategories: {
        width: width * 0.8,
        paddingHorizontal: 20,
        paddingBottom: 10,
        flexDirection: "row",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,

    },
    postDetailPageFooterCategoriesText: {
        fontSize: 18,
        fontFamily: "LeagueSpartan-Bold",
        color: "#585858",
    },
    postFooterSaved: {
        width: width * 0.2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },


    // bottom bar
    bottomBar: {
        height,
        width,
        backgroundColor: "transparent",
        position: "absolute",
        flexDirection: "row",
    },
    bottomBarBox: {
        height: height * 0.07,
        width,
        alignSelf: "flex-end",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
    },
    bottomBarDividerBox: {
        position: "absolute",
        height: height * 0.07,
    },
    bottomBarDivider: {
        height: 1,
        width,
        backgroundColor: "#C0C0C0",
        alignSelf: "flex-start"
    },
    iconBox: {
        height: height * 0.07,
        width,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"

    },
    createPostBox: {
        backgroundColor: "#5b86e5",
        height: height * 0.055,
        width: height * 0.055,
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    createPostText: {
        fontSize: 27,
        color: "white",
        fontFamily: "LeagueSpartan-Bold",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1.5, height: 1.5 },
        textShadowRadius: 5
    }

})




export default styles