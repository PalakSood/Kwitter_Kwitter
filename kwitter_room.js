
//ADD YOUR FIREBASE LINKS
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



user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;


function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}







function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
  
      //console.log("Room Name - " + Room_names);
      
      
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;


    });
  });

}

getData();

function redirectToRoomName(name) {
  //console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}









//till here class 95




function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}
