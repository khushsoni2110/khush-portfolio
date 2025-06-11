function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username === "khush" && password === "letmesee") {
    localStorage.setItem("loggedIn", "true");
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid credentials. Try again.");
  }
}

function signup() {
  alert("Signup is disabled.\nUse:\nUsername: khush\nPassword: letmesee");
  window.location.href = "login.html";
}

function checkLogin() {
  const loggedIn = localStorage.getItem("loggedIn");
  if (!loggedIn) {
    alert("Access denied. Please log in.");
    window.location.href = "login.html";
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  alert("Logged out successfully.");
  window.location.href = "login.html";
}
