// Custom JavaScript for interactivity
document.addEventListener("DOMContentLoaded", function() {
    // Example: Add click event listeners to cards
    document.getElementById("card1").addEventListener("click", function() {
        alert("Card 1 clicked!");
    });

    document.getElementById("card2").addEventListener("click", function() {
        alert("Card 2 clicked!");
    });

    document.getElementById("card3").addEventListener("click", function() {
        alert("Card 3 clicked!");
    });

    // Example: Handle form submission
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Form submitted!");
    });
});
