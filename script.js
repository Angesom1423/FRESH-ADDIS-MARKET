//navigation icon function
const menuIcon = document.getElementById("menuIcon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  menu.classList.toggle("show");
});
//login format functioning code block
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "admin" && password === "1234") {
    //when click the login icon the page goes to the product page
    window.location.href = "home.html";
  } else {
    alert("Wrong username or password");
  }
}
function signup() {
  const username = document.getElementById("signupUsername").value.trim();
  const password = document.getElementById("signupPassword").value;
  const confirm = document.getElementById("signupConfirm").value;
  const msg = document.getElementById("signupMsg");

  if (!username || !password || !confirm) {
    msg.textContent = "All fields are required";
    msg.style.color = "red";
    return;
  }

  if (password !== confirm) {
    msg.textContent = "Passwords do not match";
    msg.style.color = "red";
    return;
  }

  // store user (for demo purposes)
  const user = {
    username: username,
    password: password
  };

  localStorage.setItem("user", JSON.stringify(user));

  msg.textContent = "Account created successfully!";
  msg.style.color = "green";

  // optional: clear fields
  document.getElementById("signupUsername").value = "";
  document.getElementById("signupPassword").value = "";
  document.getElementById("signupConfirm").value = "";
}
