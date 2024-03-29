/*****************************
* environment.js
* path: '/environment.js' (root of your project)
******************************/

import Constants from 'expo-constants';
import { Platform } from "react-native";

const localhost =
 Platform.OS === "ios" ? "localhost:8080" : "10.0.2.2:8080";

const ENV = {
 dev: {
    apiUrl: localhost,
   firebaseConfig: {
    apiKey: "[Enter your key here]",
    authDomain: "[Enter your auth domain here]",
    databaseURL: "[Enter your databsae url here]",
    projectId: "[Enter your project id here]",
    storageBucket: "[Enter your storage bucket here]",
    messagingSenderId: "[Enter your messaging sender id here]",
    appId: "[Enter your app id here]"
   } 
 },
 staging: {
    apiUrl: "[your.staging.api.here]",
   // Add other keys you want here
 },
 prod: {
    apiUrl: "[your.production.api.here]",
   // Add other keys you want here
 }
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
 // What is __DEV__ ?
 // This variable is set to true when react-native is running in Dev mode.
 // __DEV__ is true when run locally, but false when published.
 if (__DEV__) {
   return ENV.dev;
 } else if (env === 'staging') {
   return ENV.staging;
 } else if (env === 'prod') {
   return ENV.prod;
 }
};

export default getEnvVars;