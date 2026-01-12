document.addEventListener("DOMContentLoaded", function () {
    // Search Courses
    document.getElementById("search").addEventListener("keyup", function () {
        let filter = this.value.toLowerCase();
        let courses = document.querySelectorAll(".course");
        courses.forEach(course => {
            let title = course.querySelector("h3").textContent.toLowerCase();
            if (title.includes(filter)) {
                course.style.display = "block";
            } else {
                course.style.display = "none";
            }
        });
    });

    // Mobile Navbar Toggle
    const menuToggle = document.createElement("div");
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = "&#9776;"; // Hamburger icon
    document.querySelector("header").appendChild(menuToggle);

    const nav = document.querySelector("nav ul");
    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    // Load More Courses Functionality
    document.getElementById("loadMore").addEventListener("click", function () {
        let moreCourses = [
            { title: "Cybersecurity Basics", provider: "IBM", img: "images/cybersecurity.jpg" },
            { title: "Machine Learning", provider: "MIT", img: "images/ml.jpg" },
            { title: "Digital Marketing", provider: "Google", img: "images/marketing.jpg" }
        ];
        let container = document.querySelector(".course-container");

        moreCourses.forEach(course => {
            let newCourse = document.createElement("div");
            newCourse.classList.add("course");
            newCourse.innerHTML = `
                <img src="${course.img}" alt="${course.title}">
                <h3>${course.title}</h3>
                <p>${course.provider}</p>
                <span class="tag">Free</span>
            `;
            container.appendChild(newCourse);
        });

        this.style.display = "none"; // Hide button after loading more
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Add click event to all courses
    document.querySelectorAll(".course").forEach(course => {
        course.addEventListener("click", function () {
            alert("Redirecting to course details..."); // Replace with actual redirection logic
            // window.location.href = "course-details.html"; // Uncomment this line to redirect
        });
    });
});

// Get elements
const loginBtn = document.querySelector(".btn-login");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close-btn");

// Show pop-up when login button is clicked
loginBtn.addEventListener("click", function () {
    popup.classList.add("show"); // Add class to make pop-up visible
});

// Close pop-up when close button is clicked
closeBtn.addEventListener("click", function () {
    popup.classList.remove("show"); // Remove class to hide pop-up
});
