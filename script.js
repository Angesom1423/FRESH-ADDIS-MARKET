// MENU
const menuIcon = document.getElementById("menuIcon");
const menu = document.getElementById("menu");

if (menuIcon) {
  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    menu.classList.toggle("show");
  });
}

