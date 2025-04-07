#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todo = [];
let condition = true;
console.log(chalk.yellowBright.bold("\n \t Welcome to Todo-List: Made by Tayyeba Ali"));
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do :",
                choices: ["Add Task", "Update Task", "Delete Task", "View Todo-List", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            condition = false;
        }
    }
};
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.yellowBright("Enter your new task:")
        }
    ]);
    todo.push(newTask.task);
    console.log(` \n  ${newTask.task} task added sucessfully in Todo-List`);
};
//function to view all Todo-list tasks
let viewTask = () => {
    console.log("\n Your Todo-List: \n");
    todo.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
//function to delet a task from thr list
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to delete:"
        }
    ]);
    let deleteTask = todo.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deleteTask} this task has been deleted successfully from your Todo-List`);
};
//functin to update a task
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no' of the task you want to update :",
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter new task name",
        }
    ]);
    todo[update_task_index.index - 1] = update_task_index.new_task;
    console.log(`\n Task at index no. ${update_task_index.index - 1} updated successfully [For updated list check option : "view Todo-List"]`);
};
main();
