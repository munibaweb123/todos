#! usr/bin/env node
import inquirer from "inquirer"
let todos:string[]=[];
let condition=true;
let mainMenu=async()=>{
let count=await inquirer.prompt({
    name:"select",
    type:"list",
    message:"select any one from the given list!",
    choices:["Add","delete","exit"]

})

if(count.select==="Add"){

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
if(todo.addMore===false){
    mainMenu();
}


}

    }

else if(count.select==="delete"){
 for(let i=0;i<=todos.length;i++){
    let del=await inquirer.prompt({
        name: "index",
        type:"number",
        message:"type index to delete from your added todos"
    })
    todos.splice(del.index,1);
    console.log(todos);
    

 }
 mainMenu();
   
    
    }
    else if(count.select==="exit"){
        console.log("Thankyou for choosing our todo app!")
    }
}
mainMenu();
