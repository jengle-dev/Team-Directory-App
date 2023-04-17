global.document = new JSDOM(html).window.document;
const roleInput = document.getElementById("role");

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Display Appropriate Icon
const iconSet = () => {
    if (roleInput = "engineer") {
        let devIcon = document.getElementById("iconDevMode");
        // Need to set input to lowercase
        if (devIcon.style.display === "none") {
            devIcon.style.display = "block";
        }
    } else if (roleInput = "intern") {
        let internIcon = document.getElementById("iconSchool");
        // Need to set input to lowercase
        if (internIcon.style.display === "none") {
            // document.setAttribute('class', );
        }
    } else if (roleInput = "manager") {
        let managerIcon = document.getElementById("iconLocalCafe");
        // Need to set input to lowercase
        if (managerIcon.style.display === "none") {
            managerIcon.style.display = "block"
        }
    }
};
    
// Display Appropriate Role

// Employee ID

// Email

// GitHub


