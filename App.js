import { StyleSheet, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './src/screens/HomePage';
import LoginPage from './src/screens/LoginPage';
import RegisterPage from './src/screens/RegisterPage';
import CreatePostPage from './src/screens/CreatePostPage';
import EmptyPostPage from './src/components/createpost_page_components/EmptyPostPage';
import PoemPostPage from './src/components/createpost_page_components/PoemPostPage';
import DrawingPostPage from './src/components/createpost_page_components/DrawingPostPage';
import ProfilePage from './src/screens/ProfilePage';
import SettingsPage from './src/screens/SettingsPage';
import PostDetailPage from './src/components/profile_page_components/PostDetailPage';
import Saved from './src/components/profile_page_components/Saved';
import OtherProfilePage from './src/screens/OtherProfilePage';
import PostHeader from './src/components/home_page_components/posts_components/PostHeader';
import SplashScreen from './src/screens/SplashScreen';
import FollowListPage from './src/screens/FollowListPage';
import FollowList from './src/components/follow_list_page_components/FollowList';
import FollowingListPage from './src/screens/FollowingListPage';

import { firebase } from './config'


const Stack = createStackNavigator();

const App = () => {

  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState()


  
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle="dark-content"
      />
      <Stack.Navigator initialRouteName="LoginPage" >
        <Stack.Screen options={{ headerShown: false }} name="HomePage" component={HomePage} />
        <Stack.Screen options={{ headerShown: false }} name="ProfilePage" component={ProfilePage} />
        <Stack.Screen options={{ headerShown: false }} name="OtherProfilePage" component={OtherProfilePage} />
        <Stack.Screen options={{ headerShown: false }} name="CreatePostPage" component={CreatePostPage} />
        <Stack.Screen options={{ headerShown: false }} name="SettingsPage" component={SettingsPage} />
        <Stack.Screen options={{ headerShown: false }} name="PostDetailPage" component={PostDetailPage} />
        <Stack.Screen options={{ headerShown: false }} name="EmptyPostPage" component={EmptyPostPage} />
        <Stack.Screen options={{ headerShown: false }} name="PoemPostPage" component={PoemPostPage} />
        <Stack.Screen options={{ headerShown: false }} name="DrawingPostPage" component={DrawingPostPage} />
        <Stack.Screen options={{ headerShown: false }} name="FollowListPage" component={FollowListPage} />
        <Stack.Screen options={{ headerShown: false }} name="FollowingListPage" component={FollowingListPage} />
        <Stack.Screen options={{ headerShown: false }} name="Saved" component={Saved} />
        <Stack.Screen options={{ headerShown: false }} name="PostHeader" component={PostHeader} />
        <Stack.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashScreen} />
        <Stack.Screen options={{ headerShown: false }} name="FollowList" component={FollowList} />
        <Stack.Screen options={{ headerShown: false }} name="LoginPage" component={LoginPage} />
        <Stack.Screen options={{ headerShown: false }} name="RegisterPage" component={RegisterPage} />
        {/* <Stack.Screen options={{ headerShown: false }} name="a" component={a} />
      <Stack.Screen options={{ headerShown: false }} name="b" component={b} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
