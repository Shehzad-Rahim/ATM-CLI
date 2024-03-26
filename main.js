import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "userId",
        type: "input",
        message: "Please enter your user id"
    },
    {
        name: "userPin",
        type: "number",
        message: "Please enter your user pin"
    },
    {
        name: "accountType",
        type: "list",
        choices: ["Current", "Saving"],
        message: "Please select your account type"
    },
    {
        name: "transactionType",
        type: "list",
        choices: ["Fast Cash", "Withdraw"],
        message: "Please enter your transaction type",
        when(answers) {
            return answers.accountType;
        },
    },
    {
        name: "amount",
        type: "list",
        choices: [1000, 2000, 10000, 15000, 20000, 25000],
        message: "Please select your amount",
        when(answers) {
            return answers.transactionType == "Fast Cash";
        },
    },
    {
        name: "amount",
        type: "number",
        message: "Please enter your amount",
        when(answers) {
            return answers.transactionType == "Withdraw";
        },
    }
]);
if (answer.userId && answer.userPin) {
    const balance = Math.floor(Math.random() * 1000000);
    console.log(balance);
    const EnteredAmount = answer.amount;
    if (balance >= EnteredAmount) {
        const remaining = balance - EnteredAmount;
        console.log(`Your remaining Balance is ${remaining}`);
    }
    else {
        console.log("You have insufficient balance");
    }
}
