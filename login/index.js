const btn = document.getElementById("login");

btn.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const password = document.getElementById("password").value.trim();

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("No account found. Please register first!");
    return;
  }

  if (user.name === name && user.password === password) {
    localStorage.setItem("login", "true");
    alert("Login successful!");
    window.location.href = "../home/index.html";
  } else {
    alert("Invalid username or password!");
  }
});
