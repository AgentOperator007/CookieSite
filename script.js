// Check if the cookie consent has already been accepted
document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("accept-cookies");

    // Show the banner every time the user visits
    cookieBanner.style.display = "flex"; // Show the banner

    // Event listener for the accept button
    acceptButton.addEventListener("click", function() {
        // Remove the banner after acceptance
        cookieBanner.style.display = "none"; // Hide the banner
    });
});
