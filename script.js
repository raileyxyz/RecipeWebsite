// Dark mode code
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.textContent = "Light Mode";
  } else {
    darkModeBtn.textContent = "Dark Mode";
  }
});

// Get started button scroll in service section
const getStartedBtn = document.querySelector(".img-btn");

getStartedBtn.addEventListener("click", () => {
  document.querySelector("#service").scrollIntoView({
    behavior: "smooth",
  });
});
