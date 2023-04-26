const form = document.querySelector("form");
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Add a <p> element right after the h2'Login to post content'.
const messageElement = document.createElement("p");
form.insertBefore(messageElement, form.children[0].nextSibling);

form.addEventListener("submit", function(event) {
  let error_msg = "";
  
  if (usernameInput.value === "" && passwordInput.value === "") {
      error_msg = "Please enter your username and password.";
  } else if (usernameInput.value === "") {
      error_msg = "Please enter your username.";
  } else if (passwordInput.value === "") {
      error_msg = "Please enter your password.";
  }
  
  // Update the <p> element with the error_msg
  messageElement.innerText = error_msg;
  messageElement.style.color = "red";

  if (error_msg !== "") {
    event.preventDefault();
     console.log("Login error."); //this is the console log that will appear in inspect
  }
});

form.addEventListener("click", function() {
  messageElement.innerText = "";
});