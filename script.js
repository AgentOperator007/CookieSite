// Check if the cookie consent has already been accepted
document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("accept-cookies");

    // If the user has accepted cookies previously, do not show the banner
    if (!localStorage.getItem("cookiesAccepted")) {
        cookieBanner.style.display = "flex"; // Show the banner
    }

    // Event listener for the accept button
    acceptButton.addEventListener("click", function() {
        // Set a flag in localStorage to remember the user's choice
        localStorage.setItem("cookiesAccepted", "true");
        cookieBanner.style.display = "none"; // Hide the banner
    });
});
