#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let mainMenu = async () => {
    let condition = true;
    console.log(`\b Welcome to my todos app! \n`);
    let count = await inquirer.prompt({
        name: "select",
        type: "list",
        message: "select any one from the given list!",
        choices: ["Add", "delete", "edit", "view list", "exit"]
    });
    if (count.select === "Add") {
        while (condition) {
            let todo = await inquirer.prompt([{
                    name: "addtask",
                    type: "input",
                    message: "what you want to add in your todo list?"
                },
                {
                    name: "addMore",
                    type: "confirm",
                    message: "Do you want to add more?",
                    default: "false"
                }]);
            todos.push(todo.addtask);
            console.log(todos);
            condition = todo.addMore;
            if (todo.addMore === false) {
                mainMenu();
            }
        }
    }
    else if (count.select === "delete") {
        while (condition) {
            let del = await inquirer.prompt([{
                    name: "index",
                    type: "number",
                    message: "type index to delete from your added todos"
                },
                {
                    name: "ask",
                    type: "confirm",
                    message: "do you want to delete more index?",
                    default: "false"
                }]);
            if (del.index < todos.length) {
                todos.splice(del.index, 1);
                console.log(`Your selected index of todos is successfully removed. \n `);
                console.log(todos);
                condition = del.ask;
                if (del.ask === false) {
                    mainMenu();
                }
            }
            else {
                console.log(`type right index of array to remove todos`);
            }
        }
    }
    else if (count.select === "edit") {
        while (condition) {
            let todo = await inquirer.prompt([{
                    name: "edittask",
                    type: "input",
                    message: "what you want to edit/change in your todo list?"
                },
                {
                    name: "index",
                    type: "number",
                    message: "please give index of todos array to edit"
                },
                {
                    name: "editMore",
                    type: "confirm",
                    message: "Do you want to edit more?",
                    default: "false"
                }]);
            todos.splice(todo.index, 1, todo.edittask);
            console.log("Your updated todo list is:\n");
            console.log(todos);
            condition = todo.editMore;
            if (todo.editMore == false) {
                mainMenu();
            }
        }
    }
    else if (count.select === "view list") {
        console.log("your todo list is:\n");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}- ${todos[i]}`);
        }
        mainMenu();
    }
    else if (count.select === "exit") {
        console.log("Thankyou for choosing our todo app!");
    }
};
mainMenu();
