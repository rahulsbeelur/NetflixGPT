// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBBXXH0c_CaTzILttDFB5czCGET9m-eqjU',
    authDomain: 'netflixgpt-7ec72.firebaseapp.com',
    projectId: 'netflixgpt-7ec72',
    storageBucket: 'netflixgpt-7ec72.appspot.com',
    messagingSenderId: '527838517460',
    appId: '1:527838517460:web:fb57d84f6d07e80af5c341',
    measurementId: 'G-69S2MR6GP7'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
