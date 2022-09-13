import { StyleSheet, Dimensions } from "react-native"

const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({

    // Register box
    registerPage: {
        height,
        width,
    },
    registerBox: {
        height,
        width,
        alignItems: "center",
        justifyContent: "center"

    },
    registerBoxContent: {
        height: height * 0.7,
        width: width * 0.8,
        borderRadius: 15,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 10,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"

    },

    // Register text
    registerTextBox: {
        position: "absolute",
        height: height * .15,
        width,
        alignItems: "center",
        justifyContent: "center"
    },
    registerText: {
        fontSize: 33,
        fontFamily: "LeagueSpartan-Bold",
        letterSpacing: 5,
        color: "white",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 15

    },

    // POEMTRA and Register text
    registerBoxContentTextBox: {
        position: "absolute",
        height: height * 0.7,
    },
    registerBoxContentBoxBox: {
        height: height * 0.135,
        alignItems: "center",
        justifyContent: "center",
    },
    registerBoxPoemtraText: {
        fontSize: 28,
        color: "black",
        fontFamily: "LeagueSpartan-Bold",
        letterSpacing: 3.5,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5
    },
    registerBoxRegisterText: {
        fontSize: 16,
        color: "grey",
        fontFamily: "LeagueSpartan-medium",
        letterSpacing: 1.2

    },

    // Input
    inputForm: {
        height: height * 0.465,
        alignItems: "center",
    },
    registerInput: {
        width: width * 0.7,
        height: 40,
        margin: 10,
        paddingLeft: 15,
        fontSize: 12,
        fontFamily: "LeagueSpartan-Medium",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "white",
    },

    // Register Button
    registerButton: {
        width: width * 0.7,
        height: height * 0.055,
        marginTop: 30,
        backgroundColor: "#5b86e5",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    registerButtonText: {
        fontFamily: "LeagueSpartan-Bold",
        letterSpacing: 1.3,
        color: "white"
    },

    // Other Things
    alreadyHave: {
        height: height * .7,
        width,
        position: "absolute",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center"
    },
    alreadyHaveBox: {
        height: height * 0.1,
        flexDirection: "row",
    },
    alreadyHaveText: {
        color: "black",
        fontFamily: "LeagueSpartan-Medium",
        fontSize: 16,
    },
    alreadyHaveLoginText: {
        fontSize: 16,
        color: "#4169E1",
        fontFamily: "LeagueSpartan-Bold",

    }

})




export default styles