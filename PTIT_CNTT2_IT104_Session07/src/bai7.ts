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
class SavingAccount extends Account {
    public interestRate: number;
    constructor(accountNumber: string, balance: number, status: string, interestRate: number) {
        super(accountNumber, balance, status);
        this.interestRate = interestRate;
    }
    public withdraw(): void {
        if (this.amount > 0 && this.balance - this.amount >= 0) {
            this.balance -= this.amount;
            this.history.push(`Rut ${this.amount}, so du: ${this.balance}`);
            console.log(`Rut thanh cong ${this.amount}`);
            this.amount = 0;
        } else {
            console.log("Qua so du");
        }
    }
}
const sav = new SavingAccount("123456", 1000, "active", 0.05);
sav.amount = 10;
sav.deposit();
sav.amount = 20;
sav.withdraw();
sav.amount = 10000000;
sav.withdraw();
sav.amount = 1000000;
sav.withdraw();
sav.showHistory();
