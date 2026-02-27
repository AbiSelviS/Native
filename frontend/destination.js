const cards = document.querySelectorAll(".images");

cards.forEach(card => {
  card.addEventListener("click", () => {

    // remove active from all
    cards.forEach(c => c.classList.remove("active"));

    // add active to clicked one
    card.classList.add("active");

  });
});