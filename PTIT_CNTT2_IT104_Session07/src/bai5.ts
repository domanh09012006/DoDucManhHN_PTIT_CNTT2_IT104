class Account {
    public id: number;
    public userName: string;
    private password: string;
    public isLogin: boolean;
    public role: string;
    constructor(id: number, userName: string, password: string, isLogin: boolean, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    public login(): void {
        console.log("Phuong thuc login cua lop cha");
    }
    public logout(): void {
        if (this.isLogin) {
            console.log("Dang xuat thanh cong");
            this.isLogin = false;
        } else {
            console.log("Chua dang nhap nen khong can dang xuat");
        }
    }
}
class userAcc extends Account {
    public status: string;
    constructor(id: number, userName: string, password: string, isLogin: boolean, role: string, status: string) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    public login(): void {
        if (this.status === "active") {
            this.isLogin = true;
            console.log(`Nguoi dung ${this.userName} da dang nhap thanh cong`);
        } else if (this.status === "banned") {
            console.log("Tai khoan da bi khoa");
        } else {
            console.log("Trang thai tai khoan khong hop le");
        }
    }
}
let user1 = new userAcc(1, "nguyenvana", "123456", false, "user", "active");
user1.login();   
user1.logout();  
