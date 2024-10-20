// Selecting the toggle button for sidebar
const sidebar = document.querySelector(".toggle-btn");

// Adding click event listener to toggle the sidebar
sidebar.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});