

document.getElementById("signin-btn").addEventListener("click", function(){
   
    // 1. get the username
    const userNameInput =document.getElementById("input-username");
    const userName =  userNameInput.value;
    console.log(userName);
    // 2. get the password
    const passWordInput = document.getElementById("input-password");
    const passWord = passWordInput.value;
    console.log(passWord);
    // 3.match username and pass
    if(userName == "admin" && passWord == "admin123"){
      alert("signin success");
    } else{
      alert("signin failed");
      return;
    }
})