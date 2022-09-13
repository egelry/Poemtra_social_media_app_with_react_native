import { StyleSheet, Dimensions } from "react-native"

const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({

    //Poemtra and Login text
    loginPage: {
        height,
        width,
        backgroundColor: "white",
    },
    loginPageBox: {
        height: height * 0.65,
        width: width * 0.9,
        borderRadius: 15,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 10,
        backgroundColor: "white",
    },
    loginPageContent: {
        height,
        width,
        alignItems: "center",
        justifyContent: "center"
    },
    poemtraTextBox: {
        height: height * 0.2,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15
    },
    poemtraText: {
        fontSize: 28,
        color: "black",
        fontFamily: "LeagueSpartan-Bold",
        letterSpacing: 3.5,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5
    },
    loginText: {
        fontSize: 16,
        color: "grey",
        fontFamily: "LeagueSpartan-medium",
        letterSpacing: 1.2
    },

    //Login Inputs
    inputText: {
        height: height * 0.3,
        borderRadius: 15,
        alignItems: "center",
    },
    loginInput: {
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
    },


    //Login Button
    loginButton: {
        width: width * 0.7,
        height: height * 0.055,
        marginTop: 30,
        backgroundColor: "#5b86e5",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    loginButtonText: {
        fontFamily: "LeagueSpartan-Bold",
        letterSpacing: 1.3,
        color: "white"
    },

    //register etc.
    others: {
        height: height * 0.15,
        width: width * 0.9,
        alignItems: "center",
        marginTop: 15,

    },
    registerTextBox: {
        flexDirection: "row"
    },

    accountText: {
        color: "black",
        fontFamily: "LeagueSpartan-Medium",
        fontSize: 16,
    },
    registerText: {
        fontSize: 16,
        color: "#4169E1",
        fontFamily: "LeagueSpartan-Bold",
    },
    forgotText: {
        marginTop: 9,
        fontSize: 13,
        fontFamily: "LeagueSpartan-Medium",
        color: "black"
    },

    //Welcome Message
    welcomeMessage: {
        height: height * 0.175,
        width,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
    },
    welcomeMessageText: {
        fontSize: 46,
        fontFamily: "LeagueSpartan-Bold",
        letterSpacing: 5,
        color: "white",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 15
    }

})




export default styles