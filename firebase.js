import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAMkocLFLG6VDGlbioQcHXJ9g_2Wpjlbwg",
    authDomain: "meet-project-13b01.firebaseapp.com",
    databaseURL: "https://meet-project-13b01.firebaseio.com",
    projectId: "meet-project-13b01",
    storageBucket: "meet-project-13b01.appspot.com",
    messagingSenderId: "652796767607",
    appId: "1:652796767607:web:15b84c95e8e18b3cfcc572",
    measurementId: "G-X667M2MNT1"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase

