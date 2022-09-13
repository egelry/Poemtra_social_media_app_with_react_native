import { StyleSheet, Dimensions } from "react-native"

const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({

    // Profile Page
    profilePage: {
        height,
        width,
        backgroundColor: "white"
    },

    // App Bar
    profilePageAppBar: {
        height: height * 0.07,
        width,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white"
    },
    profilePageAppBarIconBox: {
        marginLeft: width * .05,
        marginRight: width * .05,
    },

    // Header
    profilePageHeader: {
        height: height * 0.39,
        width,
    },
    profilePageHeaderImageBox: {
        height: height * 0.21,
        width,
        alignItems: "center",
        justifyContent: "center",

    },
    profilePageHeaderImage: {
        height: height * 0.19,
        width: height * 0.19,
        borderRadius: 20,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 10,
    },
    profilePageHeaderUserBox: {
        height: height * 0.1,
        width,
        alignItems: "center",
        justifyContent: "center",
    },
    profilePageHeaderUserNameText: {
        fontSize: 18,
        fontFamily: "LeagueSpartan-ExtraBold",
        color: "black"
    },
    otherProfilePageFollowBox: {
        height: height * 0.05,
        width,
        alignItems: "center",
        justifyContent: "center",

    },
    otherProfilePageFollowButton: {
        height: height * 0.04,
        width: width * 0.3,
        borderRadius: 10,
        backgroundColor: "#463cfb",
        alignItems: "center",
        justifyContent: "center",

    },
    otherProfilePageFollowButtonText: {
        fontSize: 13,
        fontFamily: "LeagueSpartan-Bold",
        color: "white"
    },
    otherProfilePageFollowedButton: {
        height: height * 0.04,
        width: width * 0.3,
        borderRadius: 10,
        backgroundColor: "#463cfb",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row"

    },
    otherProfilePageFollowedButtonText: {
        fontSize: 13,
        fontFamily: "LeagueSpartan-Bold",
        color: "white"
    },
    profilePageHeaderUserIconBox: {
        height: height * .08,
        width: width * 0.33,
        alignItems: "center",
        justifyContent: "center",
    },
    profilePageHeaderUserIconItem: {
        alignItems: "center"
    },
    divider: {
        height: height * 0.06,
        width: width * 0.005,
        backgroundColor: "#d9d9d9"

    },
    profilePageHeaderUserText: {
        fontSize: 18,
        fontFamily: "LeagueSpartan-ExtraBold",
        color: "black"
    },
    profilePageHeaderUserBottomText: {
        fontFamily: "LeagueSpartan-Medium",
        color: "#bebebe"
    },
    profilePageHeaderPropsBox: {
        height: height * 0.08,
        width,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    // Selection
    selection: {
        height: height * .05,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    selectionDivider: {
        height: height * .03,
        width: width * 0.005,
        backgroundColor: "#d9d9d9"
    },
    selectionText: {
        fontFamily: "LeagueSpartan-Bold",
        color: "black"

    },
    disableSelectionText: {
        fontFamily: "LeagueSpartan-Bold",
        color: "#bebebe"

    },

    // User Posts
    userPosts: {
        flex: 1,
        alignItems: "center",
        marginTop: 10,

    },
    itemBox: {
        height: width / 2.11,
        width: width / 2.11,
        margin: 5,
        borderRadius: 25,
        backgroundColor: "white",
        alignItems: "center",
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 10,
    },
    itemPostTypeBox: {
        height: ((width / 2) / 3),
        justifyContent: "flex-end",
        paddingBottom: 5,
    },
    itemPostTitleBox: {
        height: ((width / 2) / 3),
        justifyContent: "center"
    },
    itemPostLikeBox: {
        height: ((width / 2) / 4),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },

    itemPostTypeText: {
        fontSize: 20,
        marginHorizontal: 5,
        fontFamily: "LeagueSpartan-ExtraBold",
        color: "black"

    },
    itemPostTitleText: {
        fontSize: 16,
        marginHorizontal: 10,
        marginTop: 5,
        fontFamily: "LeagueSpartan-Bold",
        color: "#343434",
        textAlign: "center"

    },
    itemPostLikeText: {
        fontSize: 16,
        marginHorizontal: 10,
        fontFamily: "LeagueSpartan-Bold",
        color: "#343434",

    },

    // Post Detail Page
    postDetailPage: {
        height,
        width,
        backgroundColor: "white",
    },
    postDetailPageAppBar: {
        height: height * .1,
        width,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10,
    },
    postDetailPageContent: {
        height: height * 0.9,
        width,
        alignItems: "center",
        paddingTop: height * .01,
        marginBottom: 100,
    },
    postDetailPageContentBox: {
        width: width * 0.8,
        borderRadius: 25,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 10,
    },
    postDetailPageContentHeaderBox: {
        height: height * 0.1,
        width: width * 0.8,
        alignItems: "center",
        backgroundColor: "white",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        flexDirection: "row"
    },

    userPp: {
        height: height * 0.1,
        width: width * 0.16,
        alignItems: "flex-end",
        justifyContent: "center",
        borderTopLeftRadius: 25,

    },
    userPpBox: {
        height: height * 0.0675,
        width: height * 0.0675,
        borderRadius: ((height * 0.0675) / 2),
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 4,
        borderColor: "#0F52BA"
    },
    userNameBox: {
        height: height * .1,
        width: width * 0.45,
        paddingLeft: 10,
        justifyContent: "center"
    },
    postDateBox: {
        height: height * .1,
        width: width * 0.2,
        borderTopRightRadius: 25,
        alignItems: "flex-start",
        justifyContent: "center"
    },
    userNameText: {
        fontSize: 16,
        fontFamily: "LeagueSpartan-Bold",
        color: "#757575"
    },
    postDateText: {
        fontSize: 13,
        fontFamily: "LeagueSpartan-Medium",
        color: "#757575"
    },

    postDetailPageContentContentBox: {
        width: width * 0.8,
        backgroundColor: "white",
        paddingHorizontal: 15,


    },
    postDetailPageImageBox: {
        backgroundColor: "white"

    },
    postDetailPageImage: {
        height: height * 0.4,
    },
    postDetailPageTitleBox: {
        height: height * .07,
        justifyContent: "center",
        paddingLeft: 20,

    },
    postDetailPageTitleText: {
        fontSize: 16,
        fontFamily: "LeagueSpartan-ExtraBold",
        color: "black"
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
        width: width * 0.6,
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


    postDetailPageContentRes: {
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 10,
    },
    postDetailPageContentText: {
        fontSize: 15,
        fontFamily: "LeagueSpartan-Medium",
        color: "#313131",
    },


    // settings

    settingsPage: {
        height,
        width,
    },
    settingsPageAppBar: {
        height: height * .1,
        width,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        paddingHorizontal: 10,
    },
    settingPageAppBarText: {
        fontSize: 18,
        fontFamily: "LeagueSpartan-ExtraBold",
        color: "#463cfb",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -0.8, height: 0.8 },
        textShadowRadius: 6
    },
    settingsPageContent: {
        height: height * 0.9,
        width,
        backgroundColor: "white"
    },
    settingsPageDetailTexts: {
        fontSize: 18,
        fontFamily: "LeagueSpartan-Medium",
        color: "#666666",
        letterSpacing: 1,
    },
    settingsPageVersionText: {
        fontSize: 18,
        fontFamily: "LeagueSpartan-Bold",
        color: "black",
        letterSpacing: 1,
    },
    settingsPageDetail: {
        height: height * 0.15,
        width,
        alignItems: "center",
        justifyContent: "center",
    },
    settingsPageDetailBox: {
        height: height * 0.14,
        width: width * 0.95,
        backgroundColor: "white",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "space-evenly",
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 10,
    },
    settingsPagelogOut: {
        height: height * 0.15,
        width,
        alignItems: "center",
        justifyContent: "center",
    },
    settingsPagelogOutBox: {
        height: height * 0.14,
        width: width * 0.95,
        backgroundColor: "white",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 10,
        flexDirection: "row"
    },
    settingsPagelogOutText: {
        fontSize: 25,
        fontFamily: "LeagueSpartan-Bold",
        color: "black",
        marginLeft: 20
    },
    settingsPagePremium: {
        height: height * 0.3,
        width,
        alignItems: "center",
        justifyContent: "center",
    },
    settingsPagePremiumBox: {
        height: height * 0.28,
        width: width * 0.95,
        backgroundColor: "white",
        borderRadius: 25,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 10,
    },
    premiumDetail: {
        justifyContent: "center",
        alignItems: "center"
    },
    settingsPageSoonText: {
        fontSize: 25,
        fontFamily: "LeagueSpartan-Medium",
        color: "#bebebe",
    },
    premiumText: {
        fontSize: 25,
        fontFamily: "LeagueSpartan-ExtraBold",
        color: "black",
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 10,
    },
    settingsPageRemoveAccount: {
        height: height * 0.15,
        width,
        alignItems: "center",
        justifyContent: "center",
    },
    settingsPageRemoveAccountBox: {
        height: height * 0.14,
        width: width * 0.95,
        backgroundColor: "white",
        borderRadius: 25,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 10,
    },

})

export default styles