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
    window.location.href = "index.html";
  } else {
    alert("Wrong username or password");
  }
}
