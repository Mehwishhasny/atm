import inquirer from "inquirer";
import { pinAnswer, pinCode, myBalance } from "./index.js";
if (pinAnswer.pinNumber === pinCode) {
    console.log("Your pin code is correct.\nPlease start your transaction.");
}
else if (pinAnswer.pinNumber != pinCode) {
    console.log("Please enter a valid pin code.");
    break;
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
        console.log("Your remaining Balance is" + newBalance);
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
        console.log("Your remaining balance is:" + bal);
    }
    ;
    if (bankAnswer.operations === "Check Balance") {
        console.log("Your current balance is:" + myBalance);
    }
    else {
        console.log("Thank you for choosing XYZ bank!");
    }
}
