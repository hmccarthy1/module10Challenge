var htmlScript = [];




const managerScript = function (employee) {
    return `<div class="card">
    <header class="cardHeader">
    <h2>${employee.getName()}</h2>
    <h3>${employee.getRole()}</h3>
    </header>
    <section class = "cardBody">
    <ul>
        <li>ID: ${employee.getId()}</li>
        <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
        <li>Office number: ${employee.officeNumber}</li>
    </ul>
    </section>
    </div>`


};

const engineerScript = function (employee) {
    return `<div class="card">
    <header class="cardHeader">
    <h2>${employee.getName()}</h2>
    <h3>${employee.getRole()}</h3>
    </header>
    <section class = "cardBody">
    <ul>
        <li>ID: ${employee.getId()}</li>
        <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
        <li>Office number: ${employee.getGithub()}</li>
    </ul>
    </section>
    </div>`
};

const internScript = function (employee) {
    


    return `<div class="card">
    <header class="cardHeader">
    <h2>${employee.getName()}</h2>
    <h3>${employee.getRole()}</h3>
    </header>
    <section class = "cardBody">
    <ul>
        <li>ID: ${employee.getId()}</li>
        <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
        <li>Office number: ${employee.getSchool()}</li>
    </ul>
    </section>
    </div>`


   
            
};

const generateManagerScript = function (teamArray) {
    

    htmlScript.push(
       
        teamArray.filter(employee => employee.getRole() === "Manager").map(manager => managerScript(manager)).join("")
        
        )
}



// const generateManagerScript = function (teamArray) {
//     const managers = teamArray.filter(employee => employee.Role === "Team Manager")
//     const manageScript = managers.map(manager => managerScript(manager));
//     console.log(manageScript)
//     htmlScript.push(manageScript.join(""))

// }
const generateEngineerScript = function (teamArray) {
    

    htmlScript.push(
       
        teamArray.filter(employee => employee.getRole() === "Engineer").map(employee => engineerScript(employee)).join("")
        
        )
}

const generateInternScript = function (teamArray) {
    htmlScript.push(
       
        teamArray.filter(employee => employee.getRole() === "Intern").map(employee => internScript(employee)).join("")
        
        )
}


const generateHTML = function (teamArray) {
    console.log(htmlScript)
    generateManagerScript(teamArray);
    generateEngineerScript(teamArray);
    generateInternScript(teamArray)
    console.log(htmlScript)
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
