import {
    View,
    StatusBar,
    TouchableWithoutFeedback,
    Keyboard,
    BackHandler
} from 'react-native'
import React, { useEffect } from 'react'
import styles from '../styles/login_page_styles'
import LinearGradient from 'react-native-linear-gradient'
import InputText from '../components/login_page_components/InputForm'

import PoemtraText from '../components/login_page_components/PoemtraText'
import Others from '../components/login_page_components/Others'
import WelcomeMessage from '../components/login_page_components/WelcomeMessage'
import { useFocusEffect } from '@react-navigation/native'

import {signIn} from '../../util'



const LoginPage = ({ navigation }) => {

    useEffect(() => {
        //Status Bar => Hidden
        StatusBar.setHidden(true);
    });

    // on homepage pressedback action => exit 
    useFocusEffect(
        React.useCallback(() => {
            const backAction = () => {
                BackHandler.exitApp();
                return true;
            };

            const backHandler = BackHandler.addEventListener(
                "hardwareBackPress",
                backAction
            );

            return () => backHandler.remove();
        }, [])
    );


    // Linear Gradient Setup
    const backgroundLinear = ['#36d1dc', '#5b86e5']
    const start = { x: 0, y: 1 }
    const end = { x: 1, y: 1 }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} touchSoundDisabled={true}>
            <LinearGradient
                colors={backgroundLinear}
                start={start}
                end={end}
                style={styles.loginPage}>
                <WelcomeMessage />
                <View style={styles.loginPageContent}>
                    <View style={styles.loginPageBox}>
                        <PoemtraText />
                        <InputText navigation={navigation} />
                        <Others navigation={navigation} />
                    </View>
                </View>

            </LinearGradient >
        </TouchableWithoutFeedback>

    )
}

export default LoginPage
