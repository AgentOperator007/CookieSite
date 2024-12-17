document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("accept-cookies");

    // Make sure the popup shows up every time the page is loaded
    cookieBanner.style.display = "flex"; // Always show the popup when the page loads

    // Event listener for the accept button
    acceptButton.addEventListener("click", function() {
        // Hide the banner when accepted
        cookieBanner.style.display = "none"; // Close the popup
    });
});
