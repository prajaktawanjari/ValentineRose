const items = document.querySelectorAll(".item");
const message = document.getElementById("message");

items.forEach(item => {
  item.addEventListener("click", () => {
    // Prevent clicking again
    if (item.classList.contains("revealed")) return;

    item.classList.add("revealed");
    item.textContent = item.dataset.item;

    if (item.classList.contains("rose")) {
      message.innerHTML = "🌹 A rose for my rose 💖";
    } else {
      item.classList.add("wrong");
    }
  });
});
