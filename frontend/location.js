
const form = document.querySelector("form");


form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    alert("Your message has been sent successfully! ✅");

    form.reset(); 
});
