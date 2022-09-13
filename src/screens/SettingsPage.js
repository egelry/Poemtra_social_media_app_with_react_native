import { TouchableOpacity, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import styles from '../styles/profile_page_styles'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

const SettingsPage = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.settingsPage}>
            {/* appbar */}
            <View style={styles.settingsPageAppBar}>
                <TouchableOpacity onPress={_ => { navigation.navigate("ProfilePage") }}>
                    <Feather name="arrow-left" size={30} color="black" />

                </TouchableOpacity>
                <Text style={styles.settingPageAppBarText}>SETTINGS</Text>
            </View>

            {/* content */}
            <View style={styles.settingsPageContent}>

                {/* user and app details */}
                <View style={styles.settingsPageDetail}>
                    <View style={styles.settingsPageDetailBox}>
                        <Text style={styles.settingsPageDetailTexts}>
                            Lorem Ipsum
                        </Text>
                        <Text style={styles.settingsPageDetailTexts}>
                            loremipsumdolor@gmail.com
                        </Text>
                        <Text style={styles.settingsPageVersionText}>
                            poemtra v1.0.0
                        </Text>
                    </View>
                </View>
                {/* log out */}
                <View style={styles.settingsPagelogOut}>
                    <View style={styles.settingsPagelogOutBox}>
                        <Feather name="log-out" size={30} color="black" />
                        <Text style={styles.settingsPagelogOutText}>LOG OUT</Text>
                    </View>
                </View>
                {/* premium */}
                <View style={styles.settingsPagePremium}>
                    <View style={styles.settingsPagePremiumBox}>
                        <Feather name="star" color="#463cfb" size={50} />
                        <View style={styles.premiumDetail}>
                            <Text style={styles.premiumText}>POEMTRA PREMIUM</Text>
                            <Text style={styles.settingsPageSoonText}>(soon)</Text>
                        </View>
                    </View>
                </View>
                {/* change profile picture */}
                <TouchableOpacity onPress={_ => { console.log("profile picture") }}>

                    <View style={styles.settingsPageRemoveAccount}>
                        <View style={styles.settingsPageRemoveAccountBox}>
                            <Feather name="image" color="black" size={50} />
                            <Text style={styles.premiumText}>PROFILE PICTURE</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* remove account */}
                <TouchableOpacity onPress={_ => { console.log("remove account") }}>

                    <View style={styles.settingsPageRemoveAccount}>
                        <View style={styles.settingsPageRemoveAccountBox}>
                            <Feather name="trash-2" color="black" size={50} />
                            <Text style={styles.premiumText}>REMOVE ACCOUNT</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}


export default SettingsPage
