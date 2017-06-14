 import firebase from 'firebase';

 const config = {
    apiKey: "AIzaSyCKoocl_Td1VW9tEbn1neECOtBabI-mz2c",
    authDomain: "redux-test-project-c8494.firebaseapp.com",
    databaseURL: "https://redux-test-project-c8494.firebaseio.com",
    projectId: "redux-test-project-c8494",
    storageBucket: "redux-test-project-c8494.appspot.com",
    messagingSenderId: "415656225403"
  };

  firebase.initializeApp(config);

  export const ref = firebase.database().ref();
  export const firebaseAuth = firebase.auth;