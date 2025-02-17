// Slideshow functionality
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove("active");
        if (index === currentIndex) {
            slide.classList.add("active");
        }
    });
    currentIndex = (currentIndex + 1) % slides.length;
    setTimeout(showSlides, 3000);
}

showSlides();

// Feedback form toggle
const feedbackLink = document.getElementById("feedback-link");
const feedbackForm = document.getElementById("feedback-form");

feedbackLink.addEventListener("click", function (e) {
    e.preventDefault();
    feedbackForm.style.display = feedbackForm.style.display === "block" ? "none" : "block";
});

// Form submission handling
const commentForm = document.getElementById("comment-form");

commentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(commentForm);
    const feedbackData = {};
    formData.forEach((value, key) => {
        feedbackData[key] = value;
    });
    console.log("Feedback Submitted:", feedbackData);
    alert("Thank you for your feedback!");
    commentForm.reset();
    feedbackForm.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("components/nav.html")
        .then(response => response.text())
        .then(data => document.getElementById("navbar").innerHTML = data)
        .catch(error => console.error("Error loading navbar:", error));
});
// function toggleMenu() {
//     const navLinks = document.querySelector('.nav-links');
//     navLinks.classList.toggle('active');
// }



