// Selecting the toggle button for sidebar
const sidebar = document.querySelector(".toggle-btn");

// Adding click event listener to toggle the sidebar
sidebar.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

// JavaScript for handling form submission and showing tutor sections
document.getElementById("locationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var city = document.getElementById("cityInput").value.toUpperCase(); // Get city name entered by the user
    var targetElement = document.getElementById(city); // Find the corresponding tutor section
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" }); // Scroll to the tutor section
    } else {
        // Display the popup with dynamic error message
        document.querySelector(".popup-center .desc").textContent = `We could not find any tutors in ${city}!`;
        document.querySelector(".popup-center").classList.add("active");
    }
});

// Close the popup notification
document.querySelector(".btn-sm").addEventListener("click", function(){
    document.querySelector(".popup-center").classList.remove("active");
});

// Get the user location
document.getElementById("findLocationBtn").addEventListener("click", function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
        alert("Geolocation is not supported by your browser.");
    }
});

// Success callback function for geolocation
function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const apiUrl = `https://geolocation-db.com/json/`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const city = data.city;
            const country = data.country_name;
            if (city && country) {
                document.getElementById("cityInput").value = city;
                document.getElementById("countryInput").value = country;
            } else {
                alert("City or Country not found in geolocation data.");
            }
        })
        .catch(error => {
            console.error("Error fetching geolocation data:", error);
        });
}

// Error callback function for geolocation
function errorCallback(error) {
    console.error("Error getting current position:", error);
}
