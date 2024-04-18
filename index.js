#!/usr/bin/env node
import inquirer from "inquirer";
let todos = [];
//while loop condition to run multiple times
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([{
            name: 'todo',
            type: 'input',
            message: "What do you want to add in your To do list"
        },
        {
            name: 'addMore',
            type: 'confirm',
            message: 'Do you want to add more ?',
            default: "false"
        }]);
    todos.push(addTask.todo); //to add tasks in a list used push method and target the object todo
    condition = addTask.addMore;
    console.log(todos);
}
