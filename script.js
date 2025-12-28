function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");
}

function subscribe() {
  document.getElementById("message").innerText = "Thanks for subscribing! 🎸";
}

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 100) {
      card.classList.remove("opacity-0", "translate-y-10");
      card.classList.add("opacity-100", "translate-y-0");
    }
  });
});

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
});
