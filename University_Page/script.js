
function updateDateTime() {
    const dateTimeElement = document.getElementById("dateTime");
    const now = new Date();

    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    };
    const formattedDateTime = now.toLocaleString('en-US', options);

    dateTimeElement.textContent = formattedDateTime;
}


setInterval(updateDateTime, 1000);
updateDateTime();
s
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const modal = document.getElementById("myModal");
const btn = document.getElementById("learnMoreBtn");
const span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


const studentForm = document.getElementById("studentLoginForm");
const teacherForm = document.getElementById("teacherLoginForm");

studentForm.addEventListener("submit", function(event) {
    const email = document.getElementById("student-email").value;
    const password = document.getElementById("student-password").value;
    
    if (!email || !password) {
        event.preventDefault();
        alert("Please fill in both email and password.");
    }
});

teacherForm.addEventListener("submit", function(event) {
    const email = document.getElementById("teacher-email").value;
    const password = document.getElementById("teacher-password").value;
    
    if (!email || !password) {
        event.preventDefault();
        alert("Please fill in both email and password.");
    }
});
