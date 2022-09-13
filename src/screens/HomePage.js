import { SafeAreaView, StatusBar, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppBar from '../components/home_page_components/AppBar'
import styles from '../styles/home_page_styles'
import Posts from '../components/home_page_components/Posts'
import BottomBar from '../components/home_page_components/BottomBar'
import Selection from '../components/home_page_components/Selection'
import { useFocusEffect } from '@react-navigation/native'

const HomePage = ({ navigation }) => {

    useEffect(_ => {
        StatusBar.setHidden(false)
    })

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

    return (
        <SafeAreaView style={styles.homePage}>
            <AppBar />
            <Posts />
            <BottomBar navigation={navigation} />
        </SafeAreaView>
    )
}

export default HomePage
