// ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAeZCuDjqWBU-oVnMaIB5b0mZk4w1CXPHs",
    authDomain: "anishkachatapp.firebaseapp.com",
    databaseURL: "https://anishkachatapp.firebaseio.com",
    projectId: "anishkachatapp",
    storageBucket: "anishkachatapp.appspot.com",
    messagingSenderId: "381054703033",
    appId: "1:381054703033:web:537e28a53d3708db8f1268",
    measurementId: "G-RJZ9Z1SDQ5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser() {
    
    user_name = document.getElementById("user_name").value;


    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user",
    }
    );
}


