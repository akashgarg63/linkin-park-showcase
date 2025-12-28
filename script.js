// Apply saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  }
});

// Toggle dark mode
function toggleDarkMode() {
  const html = document.documentElement;

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}

// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});

// Scroll progress
window.addEventListener("scroll", () => {
  const progress = document.getElementById("progress");
  if (!progress) return;

  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  progress.style.width = (scrollTop / height) * 100 + "%";
});

//subscribe button
function subscribe() {
  const msg = document.getElementById("message");
  const btn = event.target;

  msg.innerText = "Thanks for subscribing! 🎸";
  btn.innerText = "Subscribed";
  btn.disabled = true;
  btn.classList.add("opacity-60", "cursor-not-allowed");

  setTimeout(() => {
    msg.innerText = "";
  }, 3000);
}
