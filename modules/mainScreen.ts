import inquirer from "inquirer";
import cashWithdraw from "./cashWithdrawl.js";
import cashDeposit from "./cashDeposit.js";
import transfer from "./transfer.js";
import Utility from "./utilitybills.js";
import chalk from "chalk";

async function anotherTransaction(){
const OTrans = await inquirer .prompt([{
    name: "otherTrans",
    type: "list",
   choices: ["Yes", "No"],
   message : "Do you want another Transaction ?"
}])
return OTrans.otherTrans;
}
async function mainScreen(balance:number){

    do{
        const options = await inquirer .prompt([{
            name: "menu",
            type: "list",
            choices:['Balance Inquiry', 'Cash Withdraw', 'Cash Deposit', 'Transfer', 'Utility Bills', 'Exit'],
            message: "Please select your Transaction type."
        }]);
    
        switch(options.menu){
    
            case "Balance Inquiry":
                console.log(chalk.yellow(`Your current balance is: ${balance}`));
                break;
            case "Cash Withdraw":
                balance = await cashWithdraw(balance);
                break;
            case "Cash Deposit":
                balance = await cashDeposit(balance);
                break;
            case "Transfer":
                balance = await transfer(balance);
                break;
            case "Utility Bills":
                balance = await Utility(balance);
                break;
            case "Exit":
                anothertran = "No";
                break;
        }
        if(options.menu !== "Exit"){
            console.log(chalk.green(`Your transaction is successfull new balance is ${balance}`));
            var anothertran = await anotherTransaction();
        } 
        if( anothertran == "No") {
            console.log("Thank you for using our services")
        }
    }
    while(anothertran != "No")
}

export default mainScreen;