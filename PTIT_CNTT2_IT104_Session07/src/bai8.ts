class Account {
    public accountNumber: string;
    protected balance: number;
    protected history: string[];
    protected status: string;
    public amount: number;
    constructor(accountNumber: string, balance: number, status: string) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = status;
        this.amount = 0;
    }
    public deposit(): void {
        if (this.amount > 0) {
            this.balance += this.amount;
            this.history.push(`Nap ${this.amount}, so du: ${this.balance}`);
            console.log(`Nap thanh cong ${this.amount}`);
            this.amount = 0;
        } else {
            console.log("So tien nap phai lon hon 0");
        }
    }
    public withdraw(): void {
        if (this.amount > 0 && this.amount <= this.balance) {
            this.balance -= this.amount;
            this.history.push(`Rut ${this.amount}, so du: ${this.balance}`);
            console.log(`Rut thanh cong ${this.amount}`);
            this.amount = 0;
        } else {
            console.log("So tien rut khong hop le");
        }
    }
    public showHistory(): void {
        console.log("Lich su giao dich:");
        for (const record of this.history) {
            console.log(record);
        }
    }
}
class CheckingAccount extends Account {
    public overdraftLimit: number;
    constructor(accountNumber: string, balance: number, status: string, overdraftLimit: number) {
        super(accountNumber, balance, status);
        this.overdraftLimit = overdraftLimit;
    }
    public withdraw(): void {
        if (this.amount > 0 && this.balance - this.amount >= -this.overdraftLimit) {
            this.balance -= this.amount;
            this.history.push(`Rut ${this.amount}, so du: ${this.balance}`);
            console.log(`Rut thanh cong ${this.amount}`);
            this.amount = 0;
        } else {
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
