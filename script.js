document.addEventListener("DOMContentLoaded", () => {
    fetch("https://margarettocharon.github.io/courses.json/courses.json")
        .then(response => response.json())
        .then(data => {
            courses = data.courses; // Store courses globally
            displayCourses(courses);
        })
        .catch(error => console.error("Error fetching JSON:", error));
});

let courses = []; // Global variable for storing courses

function displayCourses(courses) {
    const courseContainer = document.getElementById("course-container");
    courseContainer.innerHTML = ""; // Clear previous content

    if (courses.length === 0) {
        courseContainer.innerHTML = `<p style="text-align:center;">No results found</p>`;
        return;
    }

    courses.forEach((course) => {
        let courseCard = `
            <div class="course-card">
                <h3>${course.year_level} Year - ${course.sem} Semester</h3>
                <p><strong>Code:</strong> ${course.code}</p>
                <p><strong>Title:</strong> ${course.description}</p>
                <p><strong>Credits:</strong> ${course.credit}</p>
            </div>
        `;
        courseContainer.innerHTML += courseCard;
    });
}

function filterCourses() {
    const searchText = document.getElementById("search-bar").value.toLowerCase();
    const filteredCourses = courses.filter(course =>
        course.description.toLowerCase().includes(searchText) ||
        course.code.toLowerCase().includes(searchText) ||
        course.year_level.toLowerCase().includes(searchText) ||
        course.sem.toLowerCase().includes(searchText)
    );
    displayCourses(filteredCourses);
}
