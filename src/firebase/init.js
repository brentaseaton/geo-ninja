  import firebase from 'firebase'
  import firestore from 'firebase/firestore'
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBmI4IxYloBWFi1NuPh_pFOqe88CZ_M8yI",
    authDomain: "udemy-geo-ninjas-1f231.firebaseapp.com",
    databaseURL: "https://udemy-geo-ninjas-1f231.firebaseio.com",
    projectId: "udemy-geo-ninjas-1f231",
    storageBucket: "",
    messagingSenderId: "435170080392"
  };

  const firebaseApp = firebase.initializeApp(config);

  export default firebaseApp.firestore()

