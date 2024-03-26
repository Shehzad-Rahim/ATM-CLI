#! /usr/bin/env node
import inquirer from "inquirer";

interface ansType {
    userId: string,
    userPin:number,
    accountType: string,
    transactionType: string,
    amount: number
}

const answer: ansType = await inquirer.prompt([
    {
        name: "userId",
        type: "input",
        message: "Please Enter Your Id:"
    },
    {
        name: "userPin",
        type: "number",
        message: "Please Enter your pin"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select your account type",
        
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdraw"],
        message: "Select your transaction",
        when(answers) {
            return answers.accountType
        }
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 10000, 20000],
        message: "Select your Amount",
        when(answers) {
            return answers.transactionType == "Fast Cash"
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your Amount",
        when(answers) {
            return answers.transactionType == "Withdraw"
        }
    },
]);

// console.log(answer);
if(answer.userId && answer.userPin){
    const balance = Math.floor(Math.random()* 1000000);
    console.log("Your previous balance is",balance);
    const enteredAmount = answer.amount;
    if(balance >= enteredAmount){
       const remaining = balance - enteredAmount;
       if(answer.transactionType == "Fast Cash"){
        console.log("You have withdraw", answer.amount);
        
       }else if(answer.transactionType == "Withdraw"){
        console.log("You have withdraw", answer.amount);
        
       }
       console.log("Your remaining balance is ", remaining);
       
    }else{
        console.log("Insuficient Balance");
        
    }
    
}
