const signUpForm = document.querySelector("#signupForm");
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = e.target.username.value.trim();
  const password = e.target.password.value.trim();
  if(username && password){
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userNameExists = users.some((user) => user.username === username);
    if(!userNameExists){
      users.push({username:username,password:password});
      localStorage.setItem('users',JSON.stringify(users));
      alert("sign up was successful");
      window.location.href = "login.html";
    }else{
      alert("this username is already token");
    }
  }else{
    alert("please enter a valid value");
  }
})