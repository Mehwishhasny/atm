import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 20000;
let pinCode = 12345;
let userName = "";
console.log(chalk.yellow.bold("Welcome to the ATM service of XYZ bank."));
const name = await inquirer.prompt([
    { message: "Please enter your name:", type: "input", name: "fullName" },
]);
let pinAnswer = await inquirer.prompt([
    {
        message: "Please enter your 5 digit pin code:",
        type: "number",
        name: "pinNumber",
    },
]);
if (pinAnswer.pinNumber === pinCode) {
    console.log(chalk.blue("Your pin code is correct.\nPlease start your transaction."));
}
else if (pinAnswer.pinNumber != pinCode) {
    console.log(chalk.red.bold("Invalid pin code."));
}
if (pinAnswer.pinNumber === pinCode) {
    let bankAnswer = await inquirer.prompt([
        {
            message: "Please select one of the options:",
            type: "list",
            name: "operations",
            choices: ["Fast Cash", "Cash Withdrawl", "Check Balance"],
        },
    ]);
    if (bankAnswer.operations === "Cash Withdrawl") {
        let cashAmount = await inquirer.prompt([
            {
                message: "Please enter the amount:",
                type: "number",
                name: "amount",
            }
        ]);
        let newBalance = myBalance -= cashAmount.amount;
        console.log("Your remaining Balance is", `${newBalance}`, ".");
    }
    ;
    if (bankAnswer.operations === "Fast Cash") {
        let bankAnswer = await inquirer.prompt([
            {
                message: "Please select the amount:",
                type: "list",
                name: "fastamount",
                choices: ["10000", "5000", "2000", "1000"],
            }
        ]);
        let bal = myBalance -= bankAnswer.fastamount;
        console.log("Your remaining balance is:", `${bal}`, ".");
    }
    ;
    if (bankAnswer.operations === "Check Balance") {
        console.log("Your current balance is:", `${myBalance}`, ".");
    }
}
else {
    console.log(chalk.red("Please enter your pin code correctly to perform a transaction."));
}
;
console.log(chalk.green.bold("Thank you for choosing XYZ bank!"));
