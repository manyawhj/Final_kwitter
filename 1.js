function add_user(){
Name=document.getElementById("user_name").value;
localStorage.setItem("user_name",Name);
window.location="index2.html";
}

