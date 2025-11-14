// Dark mode code
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.textContent = "☀️ Light Mode";
  } else {
    darkModeBtn.textContent = "🌙 Dark Mode";
  }
});

// Get started button scroll in service section
const getStartedBtn = document.querySelector(".img-btn");

getStartedBtn.addEventListener("click", () => {
  document.querySelector("#service").scrollIntoView({
    behavior: "smooth",
  });
});

// Cookies select button to another HTML page
const cookiesBtn = document.getElementById("cookiesBtn");

cookiesBtn.addEventListener("click", () => {
  window.location.href = "cookies.html";
});

const cookieIngredients = () => {
  const servings = document.getElementById("cookie-servings").value;

  if (servings === "" || servings <= 0) {
    alert("Invalid input! Please enter a number greater than 0.");
    return;
  }

  document.getElementById("cookies-butter").innerHTML = 4.5 * servings + " g";
  document.getElementById("cookies-white-sugar").innerHTML =
    8 * servings + " g";
  document.getElementById("cookies-brown-sugar").innerHTML =
    8.8 * servings + " g";
  document.getElementById("cookies-cream").innerHTML = 10 * servings + " g";
  document.getElementById("cookies-egg").innerHTML = 4 * servings + " g";
  document.getElementById("cookies-vanilla").innerHTML = 0.34 * servings + " g";
  document.getElementById("cookies-flour").innerHTML = 20.4 * servings + " g";
  document.getElementById("cookies-baking-soda").innerHTML =
    0.18 * servings + " g";
  document.getElementById("cookies-salt").innerHTML = 0.24 * servings + " g";
  document.getElementById("cookies-chocolate").innerHTML =
    22.1 * servings + " g";
};
