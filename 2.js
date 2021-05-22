var firebaseConfig = {
  apiKey: "AIzaSyB1zxfFFNBdfLe9WtZN60ZyNCwjyRSThck",
  authDomain: "kwitter-f19fd.firebaseapp.com",
  databaseURL: "https://kwitter-f19fd-default-rtdb.firebaseio.com",
  projectId: "kwitter-f19fd",
  storageBucket: "kwitter-f19fd.appspot.com",
  messagingSenderId: "1039240044960",
  appId: "1:1039240044960:web:d3316b2b6f727c217bc4c5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("name_show").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("write_room").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "index3.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
