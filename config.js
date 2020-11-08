import firebase  from 'firebase'
require ('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyC9zXpDUioXn5uOS3DeQj5XXS0E5z0Rc_I",
    authDomain: "whysad-ad00e.firebaseapp.com",
    databaseURL: "https://whysad-ad00e.firebaseio.com",
    projectId: "whysad-ad00e",
    storageBucket: "whysad-ad00e.appspot.com",
    messagingSenderId: "949247027115",
    appId: "1:949247027115:web:93fa3c9564cda5dbd414ee"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()