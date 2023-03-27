const generateHTML = require('./src/html.js');
const fs = require('fs'); 
const inquire = require('inquirer');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js'); 

const teamArr = []; 

// Prompts
const addManager = () => {
    return inquire.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?', 
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArr.push(manager); 
        console.log(manager); 
    })
};

const addEmployee = () => {
    console.log(`
    Employees added to the team
    `);

    return inquire.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose the employees role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employees name?", 
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employees ID",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
        },
        {
            type: 'confirm',
            name: 'confirmAddE',
            message: 'Are there anymore members you would like to add?',
            default: false
        }
    ])
    .then(employeeData => {

        let { name, id, email, role, github, school, confirmAddE } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArr.push(employee); 

        if (confirmAddE) {
            return addEmployee(teamArr); 
        } else {
            return teamArr;
        }
    })

};


const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("The team profile has been created!")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(teamArr => {
    return generateHTML(teamArr);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });