import inquirer from "inquirer"
let todos:string[]=[];
let condition=true;

while(condition){
let todo=await inquirer.prompt([{
    name: "addtask",
    type: "input",
    message: "what you want to add in your todo list?"
},
{
    name:"addMore",
    type:"confirm",
    message:"Do you want to add more?",
    default:"false"
}]);
todos.push(todo.addtask);
console.log(todos);
condition=todo.addMore;


}
