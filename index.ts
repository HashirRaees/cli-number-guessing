#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"
console.log(chalk.bold.redBright("\n\tWELCOME\n\t"),chalk.italic.blueBright("\nNumber Guessing Game By HashirRaees\n"))


const randomnumber= Math.floor(Math.random() * 5 + 1)

const answer = await inquirer.prompt([
    {
        name:"userguessednumber",
        type:"number",
        message:"Please guess a number between 1 to 5",

}])

if(answer.userguessednumber === randomnumber){
    console.log(chalk.greenBright("Congratulations You Have Guessed The Right Number"))

}else{
    console.log(chalk.yellowBright("You have guessed wrong"))
}