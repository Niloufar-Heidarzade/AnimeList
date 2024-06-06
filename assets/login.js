const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit",(e) => {
  e.preventDefault();
  const username = e.target.username.value.trim();
  const password = e.target.password.value.trim();
  if(username && password){
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.username === username && user.password === password);
    if(user){
      alert("login successful")
      localStorage.setItem("loggedinUser",username);
      window.location.href = "index.html";
    }else{
      alert("user not found , please sign up first");
    }
  }else{
    alert("please enter a valid value");
  }
  
})