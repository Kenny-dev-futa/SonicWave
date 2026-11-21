const themeToggle = document.getElementById("theme-toggle");

// Check if a theme was previously saved
const savedTheme = localStorage.getItem("theme");

// Apply the saved theme when the page loads
if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
  themeToggle.textContent = "☀️ Light Mode";
}

// Listen for clicks on the theme button
themeToggle.addEventListener("click", function () {

  // Toggle the dark-theme class on the body
  document.body.classList.toggle("dark-theme");

  // Check which theme is currently active
  const isDark = document.body.classList.contains("dark-theme");

  // Update the button text
  if (isDark) {
    themeToggle.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  }

});