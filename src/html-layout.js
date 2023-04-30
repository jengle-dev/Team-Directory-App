//generate full team
const createTeam = team => {

    const createManager = manager => {
        return`
        <div class="card">
            <!-- Manager Name -->
            <div id="employee-name" class="card-header">${manager.getName()}</div>
            <div id="role">${manager.getRole()}</div>
            <div class="card-body">
                <ul class="data-list-items">
                    <li class="data-list-items">Employee Number: ${manager.getId()} </li>
                    <li class="data-list-items">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="data-list-items">Office Number: ${manager.getOffice()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    const createEngineer = engineer => {
        return`
        <div class="card">
        <!-- Engineer Name -->
        <div id="employee-name" class="card-header">${engineer.getName} </div>
        <div id="role">${engineer.getRole} </div>
        <div class="card-body">
            <ul class="data-list-items">
                <li class="data-list-items">Employee Number: ${engineer.getId}  </li>
                <li class="data-list-items">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="data-list-items">GitHub: <a href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
            </ul>
        </div>
        </div>
        `
    };
    
    const createIntern = intern => {
        return`
        <div class="card">
            <!-- Intern Name -->
            <div id="employee-name" class="card-header">${intern.getName()}</div>
            <div id="role">${intern.getRole()}</div>
            <div class="card-body">
                <ul class="data-list-items">
                    <li class="data-list-items">Employee Number: ${intern.getId()}</li>
                    <li class="data-list-items">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>            
                    <li class="data-list-items">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>`;
    };

    // combine and push to html output
    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => createManager(manager))
    );

    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => createEngineer(engineer))
        .join("")
    );

    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => createIntern(intern))
        .join("")
    );

    return html.join("");
    }

// template for html export
// boiler plate details
module.exports = team => {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Directory</title>
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <!-- CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../dist/style.css">
</head>

<body>
    <!-- Header for app -->
    <div class="container-fluid col-12">
        <header>My Team</header>
    </div>

    <!-- Flex Container for cards -->
    <div class="container-fluid">
        <div class="row">
            <!-- where the cards will be generated for each employee -->
            <div class="sectionArea d-flex justify-content-center">
                ${createTeam(team)}
            </div>
        </div>    
    </div>

<!-- Bootstrap CDN -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossorigin="anonymous"></script>
</body>

</html>

`;
};