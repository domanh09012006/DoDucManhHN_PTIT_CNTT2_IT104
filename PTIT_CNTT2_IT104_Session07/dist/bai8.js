"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    accountNumber;
    balance;
    history;
    status;
    amount;
    constructor(accountNumber, balance, status) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = status;
        this.amount = 0;
    }
    deposit() {
        if (this.amount > 0) {
            this.balance += this.amount;
            this.history.push(`Nap ${this.amount}, so du: ${this.balance}`);
            console.log(`Nap thanh cong ${this.amount}`);
            this.amount = 0;
        }
        else {
            console.log("So tien nap phai lon hon 0");
        }
    }
    withdraw() {
        if (this.amount > 0 && this.amount <= this.balance) {
            this.balance -= this.amount;
            this.history.push(`Rut ${this.amount}, so du: ${this.balance}`);
            console.log(`Rut thanh cong ${this.amount}`);
            this.amount = 0;
        }
        else {
            console.log("So tien rut khong hop le");
        }
    }
    showHistory() {
        console.log("Lich su giao dich:");
        for (const record of this.history) {
            console.log(record);
        }
    }
}
class CheckingAccount extends Account {
    overdraftLimit;
    constructor(accountNumber, balance, status, overdraftLimit) {
        super(accountNumber, balance, status);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw() {
        if (this.amount > 0 && this.balance - this.amount >= -this.overdraftLimit) {
            this.balance -= this.amount;
            this.history.push(`Rut ${this.amount}, so du: ${this.balance}`);
            console.log(`Rut thanh cong ${this.amount}`);
            this.amount = 0;
        }
        else {
            console.log("Vuot muc pickleball");
        }
    }
}
const checkAcc = new CheckingAccount("222", 1000, "active", 500);
checkAcc.amount = 300;
checkAcc.deposit();
checkAcc.amount = 1200;
checkAcc.withdraw();
checkAcc.amount = 700;
checkAcc.withdraw();
checkAcc.showHistory();
