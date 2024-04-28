#! /usr/bin/env node

import inquirer from "inquirer";


const randomnumber= Math.floor(Math.random() * 5 + 1)

const answer = await inquirer.prompt([
    {
        name:"userguessednumber",
        type:"number",
        message:"Please guess a number between 1 to 5",

}])
if(answer.userguessednumber === randomnumber){
    console.log("Congratulations You Have Guessed Right Number ")
}else {
    console.log("You have guessed wrong")
}