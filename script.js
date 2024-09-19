var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
//Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education")
        .value;
    var experience = document.getElementById("experience")
        .value;
    var skills = document.getElementById("skills").value;
    //Generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone no:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n    \n    <p contenteditable=\"true\"><b>Education:</b>").concat(education, "</p>\n    <p contenteditable=\"true\"><b>Experience:</b>").concat(experience, "</p>\n    <p contenteditable=\"true\"><b>Skills:</b>").concat(skills, "</p>");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        ("The rsume display element is missing");
    }
});
