import { StyleSheet, Dimensions } from "react-native"

const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({

    // Splash Screen
    splashScreen: {
        height,
        width,
        backgroundColor: "white"
    },
    poemtraHeader: {
        height: height * 0.2,
        alignItems: "center",
        justifyContent: "center"
    },
    poemtraHeaderBox: {
        height: height * .15,
        width: width * 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    poemtraHeaderText: {
        fontSize: 35,
        color: "#5b86e5",
        fontFamily: "LeagueSpartan-Bold",
        letterSpacing: 3.5,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5
    },
    poemtraHeaderBottomText: {
        fontSize: 20,
        color: "#5b86e5",
        fontFamily: "LeagueSpartan-Bold",
        letterSpacing: 3.5,

    },
    splashScreenItem: {
        height,
        width,
        backgroundColor: "white"
    },
    splashScreenItemHeader: {
        height: height * 0.27,
        width,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 20

    },
    splashScreenTitleText: {
        fontSize: 26,
        color: "black",
        fontFamily: "LeagueSpartan-ExtraBold"
    },

    splashScreenTitleBox: {
        height: height * .06,
        width,
        alignItems: "center",
        justifyContent: "center",
    },
    splashScreenContentBox: {
        width: width * 0.8,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    splashScreenContentText: {
        fontFamily: "LeagueSpartan-Medium",
        fontSize: 18,
        color: "#bebebe",
        textAlign: "center",
    },
    splashScreenItemFooter: {
        height: height * 0.53,
        width,

    },
    activeDotStyle: {
        backgroundColor: "#5b86e5"
    },
    dontButtonText: {
        color: "black",
        letterSpacing: 1,
        fontSize: 17,
        fontFamily: "LeagueSpartan-ExtraBold",
    }

})

export default styles