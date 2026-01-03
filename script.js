//navigation icon function
const menuIcon = document.getElementById("menuIcon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  menu.classList.toggle("show");
});
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  });

  if (error) {
    alert(error.message);
  } else {
    window.location.href = "home.html";
  }
}

async function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password
  });

  if (error) {
    alert(error.message);
  } else {
    alert("Signup successful! You can now login.");
    window.location.href = "index.html";
  }
}
