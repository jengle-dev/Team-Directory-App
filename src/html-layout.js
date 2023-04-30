// manager type card
`<div class="card">
    <!-- Manager Name -->
    <div id="employee-name" class="card-header">${}</div>
    <div id="role">${}</div>
    <div class="card-body">
        <ul class="data-list-items">
            <li class="data-list-items">Employee Number: ${} </li>
            <li class="data-list-items">Email: ${} </li>
            <li class="data-list-items">Office Number: ${} </li>
        </ul>
    </div>
</div>`

// engineer type card
`<div class="card">
<!-- Engineer Name -->
<div id="employee-name" class="card-header">${} </div>
<div id="role">${} </div>
<div class="card-body">
    <ul class="data-list-items">
        <li class="data-list-items">Employee Number: ${}  </li>
        <li class="data-list-items">Email: ${}  </li>
        <li class="data-list-items">GitHub: ${}  </li>
    </ul>
</div>
</div>`

// intern type card
`<div class="card">
    <!-- Intern Name -->
    <div id="employee-name" class="card-header">${} </div>
    <div id="role">${} </div>
    <div class="card-body">
        <ul class="data-list-items">
            <li class="data-list-items">Employee Number: ${} </li>
            <li class="data-list-items">Email: ${} </li>
            <li class="data-list-items">School: ${} </li>
        </ul>
    </div>
</div>`
//generate html


// template for html
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
    <link rel="stylesheet" href="./dist/style.css">
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

<!-- Bootstrap CDN -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossorigin="anonymous"></script>
</body>

</html>

`
}