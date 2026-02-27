// Form select panrom
const form = document.querySelector("form");

// Submit event
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Page reload aagatha stop panrom

    alert("Your message has been sent successfully! ✅");

    form.reset(); // Form clear aagum
});
