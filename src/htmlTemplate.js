htmlScript = [];




const managerScript = function (employee) 

{
    return `<div class="card">
    <header class="cardHeader">
    <h2>${employee.name}</h2>
    <h3>${employee.Role}</h3>
    </header>
    <section class = "cardBody">
    <ul>
        <li>ID: ${employee.id}</li>
        <li>Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
        <li>Office number: ${employee.officeNumber}</li>
    </ul>
    </section>
    </div>`


};

const engineerScript = function (employee) {
    return `

    
        <div class="card">
        <h2>${employee.name}</h2>
        <h3>${employee.Role}</h3>
        <ul>
            <li>ID: ${employee.employeeID}</li>
            <li>Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
            <li>GitHub: ${employee.gitHub}</li>
        </ul>
    </div>`
};

const internScript = function (employee) {
    return `


    <div class="card">
        <h2>${employee.internName}</h2>
        <h3>${employee.Role}</h3>
        <ul>
            <li>ID: ${employee.internID}</li>
            <li>Email: <a href="mailto:${employee.internEmail}">${employee.internEmail}</a></li>
            <li>School: ${employee.internSchool}</li>
        </ul>
    </div>


   
            `;
};


const generateManagerScript = function (teamArray) {
    htmlScript.push(teamArray.filter(employee => employee.Role === "Team Manager")
        .map(manager => managerScript(manager))
    )
}
const generateEngineerScript = function (teamArray) {
    htmlScript.push(teamArray.filter(employee => employee.Role === "Engineer")
        .map(engineer => engineerScript(engineer))
    )
}

const generateInternScript = function (teamArray) {
    htmlScript.push(teamArray.filter(employee => employee.Role === "Intern")
        .map(Intern => internScript(Intern))
    )
}

const generateHTML = function (teamArray) {
    generateManagerScript(teamArray);
    generateEngineerScript(teamArray);
    generateInternScript(teamArray)
    console.log(htmlScript.join(""))
    return htmlScript.join("")
}


module.exports = teamArray => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Generator</title>
    <link rel="stylesheet" href="../Webpage/style.css" > 
    </head>
    <body>
    <header>
        <h1> My Team </h1>
    </header>

    <section class="cardSection">
    ${generateHTML(teamArray)}
    </section>
    </body>`


}