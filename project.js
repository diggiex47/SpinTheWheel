// Deposit the money 
// Dertermine the no. of line to bet on 
// collect the bet amt
// spin the slot machine
// check if the user won 
// give user the money if they win 
// play again 
 
const prompt = require("prompt-sync")();


const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A":2,
    "B":4,
    "C":6,
    "D":8
}

const SYMBOLS_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}



const deposit = () => {
    while (true) {
        const depositAmt = prompt("Enter a deposit value: ");
        const numberDepositAmt = parseFloat(depositAmt);

        if (isNaN(numberDepositAmt) || numberDepositAmt <= 0) {
            console.log("Invalid No., Enter again");
        }
        else {
            return numberDepositAmt;
        }
    }
};

const getNumberOfLines = () =>{
    while (true) {
        const lines = prompt("Enter number of lines 1-3: ");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines >3) {
            console.log("Invalid No., Enter again");
        }
        else {
            return numberOfLines;
        }
    }
}

const getBet = (balance) => {
    while (true) {
        const bet = prompt("Enter the bet per line ");
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / numberOfLines) {
            console.log("Invalid Bet, Enter again ");
        }
        else {
            return numberBet;
        }
    }
}


const spin = () => {
    const symbols = [];

}


let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);