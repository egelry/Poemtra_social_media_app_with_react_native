import { StyleSheet, Dimensions } from "react-native"

const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({

    // Home Page
    followListPage: {
        width,
        minHeight: height,
        backgroundColor: "white"
    },

    // appbar
    appBar: {
        height: height * .1,
        width,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "white"
    },
    searchInput: {
        width: width * 0.7,
        height: 40,
        paddingLeft: 15,
        fontSize: 12,
        fontFamily: "LeagueSpartan-Medium",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "white",
    },

    // follow list
    followList: {
        backgroundColor: "white"
    },
    // follow list item
    followListItem: {
        height: height * .07,
        width,
        flexDirection: "row"
    },
    followListItemLeftSide: {
        height: height * .07,
        width: width * 0.5,
        paddingLeft: 15,
        flexDirection: "row",
    },
    followListItemPp: {
        height: height * .055,
        width: height * .055,
        borderRadius: ((height * .055) / 2),
        backgroundColor: "#463cfb",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"
    },
    followListItemName: {
        height: height * .07,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10
    },
    followListItemNameText: {
        fontSize: 15,
        alignSelf: "center",
        fontFamily: "LeagueSpartan-Medium",
        letterSpacing: 0.15,

    },
    followListItemRightSide: {
        width: width * .5,
        alignItems: "flex-end",
        paddingRight: 10
    },
    followListItemGoProfile: {
        height: height * .07,
        alignItems: "center",
        justifyContent: "center",
    }


})




export default styles