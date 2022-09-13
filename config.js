/* // firebase config key setup

import { initializeApp } from 'firebase/app'
import {
    initializeAuth,
    getReactNativePersistence
} from 'firebase/auth/react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiKeyUrl, apiIdUrl } from './env'


// configuration

const apiKey = apiKeyUrl.apiKey
const apiId = apiIdUrl.apiId



const app = initializeApp(firebaseConfig)

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export { auth }
 */


import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { getFirestore } from 'firebase/firestore';

import { apiKeyUrl, apiIdUrl } from './env'


const apiKey = apiKeyUrl.apiKey
const apiId = apiIdUrl.apiId

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: "poemtra.firebaseapp.com",
    projectId: "poemtra",
    storageBucket: "poemtra.appspot.com",
    messagingSenderId: "963005931906",
    appId: apiId,
    measurementId: "G-80Z88JC5JQ"
};

// Initialize Firebase and Firestore

let app
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore()
const auth = app.auth()

export { db, auth }