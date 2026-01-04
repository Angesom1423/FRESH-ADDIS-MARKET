// MENU
const menuIcon = document.getElementById("menuIcon");
const menu = document.getElementById("menu");

if (menuIcon) {
  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    menu.classList.toggle("show");
  });
}
document.getElementById("login-btn").addEventListener("click", function() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (email === "admin" && password === "1234") {
        window.location.href = "home.html";
    } else {
        alert("Invalid email or password!");
    }
});

document.getElementById("login-btn").addEventListener("click", function() {
    window.location.href = "home.html";
});
 
document.getElementById("signup-btn").addEventListener("click", function() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const rePassword = document.getElementById("re-password").value.trim();

  if (!email || !password || !rePassword) {
    alert("Please fill all fields!");
    return;
  }

  if (password !== rePassword) {
    alert("Passwords do not match!");
    return;
  }

  // Everything is correct → redirect to home.html
  window.location.href = "home.html";
});




  



