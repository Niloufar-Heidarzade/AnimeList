const username = localStorage.getItem("loggedinUser")
if(username){
  document.querySelector("#profile span").innerText = `welcome ${username}`;
}else{
  document.querySelector("#profile span").innerText = " you've not loggedin yet";
}