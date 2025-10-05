const btn = document.getElementById("register");

btn.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const number = document.getElementById("number").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !email || !number || !password) {
    alert("Please fill all fields!");
    return;
  }

  const userData = { name, email, number, password };

  // Save to localStorage and JSON file (simulated)
  localStorage.setItem("user", JSON.stringify(userData));
  localStorage.setItem("login", "false");

  alert("Registration successful! Please log in.");
  window.location.href = "../login/index.html";
});
