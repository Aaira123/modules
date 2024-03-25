import inquirer from "inquirer";
let answer = await inquirer.prompt([{
        name: "Age",
        type: "number",
        message: "Enter your age;",
    }]);
console.log("insha Allah in " + (60 - answer.Age) + "years you will be 60 years old");
