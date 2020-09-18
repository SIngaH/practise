/*service firebase.storage {
    match /b/{bucket}/o {
      match /{allPaths=**} {
        allow read, write: if request.auth != null;
      }
    }
  }
*//*
var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://testing-e7472.firebaseio.com"
});
const db = firebase.firestore();

const docRef = db.collection("wines");

docRef.get().then(function(querySnapshot){
    querySnapshot.forEach(doc => {
        console.log(doc)

    }).catch(error =>{
        console.log(error)
    })
})*//*
const firebase = require("firebase");
        // Required for side-effects
        require("firebase/firestore");*/
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        /*
        var firebaseConfig = {
            apiKey: "AIzaSyDljgDMQJGynZCPG9QtxU2At1QiOLVIkrU",
            authDomain: "testing-e7472.firebaseapp.com",
            databaseURL: "https://testing-e7472.firebaseio.com",
            projectId: "testing-e7472",
            storageBucket: "testing-e7472.appspot.com",
            messagingSenderId: "1016604727933",
            appId: "1:1016604727933:web:ec4c08f12dde463ca8af14",
            measurementId: "G-5PGHCRFBXP"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        //firebase.analytics();

firebase.initializeApp(firebaseConfig);
// const firebase = require("firebase");

const db = firebase.firestore();
db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});*/

/*
var docRef = db.collection("testing-e7472").doc("SIH");
docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});*/
/*
const cityRef = db.collection('cities').doc('SF');
const doc = await cityRef.get();
if (!doc.exists) {
  console.log('No such document!');
} else {
  console.log('Document data:', doc.data());
}*/

//https://firebase.google.com/docs/firestore/quickstart#test-mode
//watch video 3:05
document.addEventListener("DOMContentLoaded", ()=>{

  const firebase = require("firebase");
// Required for side-effects
  require("firebase/firestore");
//const {firestore} = from "firebase";

  //------------------------video
  
  //var ref = new Firebase('https://testing-e7472.firebaseio.com');
  var config = {
    apiKey: "AIzaSyDljgDMQJGynZCPG9QtxU2At1QiOLVIkrU",
    authDomain: "testing-e7472.firebaseapp.com",
    databaseURL: "https://testing-e7472.firebaseio.com",
    projectId: "testing-e7472",
    storageBucket: "testing-e7472.appspot.com",
    messagingSenderId: "1016604727933",
    appId: "1:1016604727933:web:ec4c08f12dde463ca8af14",
    measurementId: "G-5PGHCRFBXP"
  };
  
  firebase.initializeApp(config);
  
  let firestore = firebase.firestore();
  
  const docRef = firestore.doc("testing-e7472/SIH");
  let outputHeader  = document.querySelector("#hotDogOutput");
  let inputTextField = document.querySelector("#latestHotDogStatus");
  let saveButton = document.querySelector("#saveButton");
  
  saveButton.addEventListener("click", ()=>{
    const textToSave = inputTextField.value;
    console.log(textToSave)
  });

});