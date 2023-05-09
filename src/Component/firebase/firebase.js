import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyDT8oeKc89ccuDixway8NzMmslNqgPlVuA",
    authDomain: "student-sphere-f2213.firebaseapp.com",
    projectId: "student-sphere-f2213",
    storageBucket: "student-sphere-f2213.appspot.com",
    messagingSenderId: "468222313257",
    appId: "1:468222313257:web:fa0dbf7bbc11dc00ffed38"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()


export  {
    storage, firebase as default
}

