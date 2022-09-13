import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from '../styles/splash_screen_styles';
import Feather from 'react-native-vector-icons/Feather'
import FA5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {

    const navigation = useNavigation()

    const slides = [
        {
            key: 1,
            title: 'CREATE AND SHARE POST',
            icon: 'pencil-alt',
            text: "Create an empty, poem or drawing\n post with poemtra.\n"

        },
        {
            key: 2,
            title: 'EXPLORE',
            icon: 'paint-brush',
            text: "Explore the other people's posts,\n save and like them!\n"
        },

    ];



    _renderSplashScreenItem = ({ item }) => {
        return (
            <View style={styles.splashScreenItem}>
                <View style={styles.splashScreenItemHeader}>
                    <FA5 name={item.icon} size={140} color="black" />
                </View>
                <View style={styles.splashScreenItemFooter}>
                    <View style={styles.splashScreenTitleBox}>
                        <Text style={styles.splashScreenTitleText}>
                            {item.title}
                        </Text>
                    </View>
                    <View style={styles.splashScreenContentBox}>
                        <Text style={styles.splashScreenContentText}>
                            {item.text}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }



    return (
        <View style={styles.splashScreen}>
            <View style={styles.poemtraHeader}>
                <View style={styles.poemtraHeaderBox}>
                    <Text style={styles.poemtraHeaderText}>
                        POEMTRA
                    </Text>
                    <Text style={styles.poemtraHeaderBottomText}>
                        social media app
                    </Text>
                </View>
            </View>
            <AppIntroSlider
                showNextButton={false}
                showPrevButton={false}
                renderDoneButton={_ => (
                    <Text style={styles.dontButtonText}>DONE</Text>
                )}
                onDone={_ => {
                    navigation.navigate("RegisterPage")
                    console.log("done")
                }}
                activeDotStyle={styles.activeDotStyle}
                renderItem={_renderSplashScreenItem}
                data={slides} />
        </View>
    )
}

export default SplashScreen

