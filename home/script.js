// Redirect if not logged in
if (localStorage.getItem("login") !== "true") {
  window.location.href = "../login/index.html";
}

// Display logged-in username
const user = JSON.parse(localStorage.getItem("user"));
if (user && user.name) {
  document.getElementById("username-display").textContent = user.name;
}

// Logout functionality
const logoutBtn = document.getElementById("logout-btn");
logoutBtn.addEventListener("click", () => {
  localStorage.setItem("login", "false");
  alert("You have been logged out!");
  window.location.href = "../login/index.html";
});

// Load movie data
fetch("movies.json")
  .then(response => response.json())
  .then(data => {
    const banner = document.querySelector(".banner");
    banner.innerHTML = `
      <img src="${data.TopPick.image}" alt="${data.TopPick.title}">
      <div class="banner-text">
        <p class="trending">${data.TopPick.subtitle}</p>
        <h1>${data.TopPick.title}</h1>
        <button class="grab-btn">${data.TopPick.buttonText}</button>
      </div>
    `;

    const movieGrid = document.getElementById("movie-grid");
    data.recommended.forEach(movie => {
      const card = document.createElement("div");
      card.classList.add("movie-card");
      card.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <p>${movie.title}</p>
        <button>Book Now</button>
      `;
      movieGrid.appendChild(card);
    });
  })
  .catch(err => console.error("Error:", err));
