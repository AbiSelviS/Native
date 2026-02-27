


const foodNames = [
    "Fish Curry",
    "Appam",
    "Kothu Parotta",
    "Idiyappam",
    "Full Meals",
    "Pongal",
    "Chicken"
];

const foodBoxes = document.querySelectorAll(".foods");

foodBoxes.forEach((box, index) => {
    let nameTag = document.createElement("p");
    nameTag.textContent = foodNames[index];
    nameTag.style.textAlign = "center";
    nameTag.style.fontWeight = "bold";
    nameTag.style.padding = "8px 0";

    box.appendChild(nameTag);
});




document.addEventListener("DOMContentLoaded", function () {

  const cards = document.querySelectorAll(".images");

  cards.forEach(function(card){
    card.addEventListener("click", function(){
      card.classList.toggle("active");
    });
  });

});