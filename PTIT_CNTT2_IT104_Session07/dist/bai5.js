"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    id;
    userName;
    password;
    isLogin;
    role;
    constructor(id, userName, password, isLogin, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    login() {
        console.log("Phuong thuc login cua lop cha");
    }
    logout() {
        if (this.isLogin) {
            console.log("Dang xuat thanh cong");
            this.isLogin = false;
        }
        else {
            console.log("Chua dang nhap nen khong can dang xuat");
        }
    }
}
class userAcc extends Account {
    status;
    constructor(id, userName, password, isLogin, role, status) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            this.isLogin = true;
            console.log(`Nguoi dung ${this.userName} da dang nhap thanh cong`);
        }
        else if (this.status === "banned") {
            console.log("Tai khoan da bi khoa");
        }
        else {
            console.log("Trang thai tai khoan khong hop le");
        }
    }
}
let user1 = new userAcc(1, "nguyenvana", "123456", false, "user", "active");
user1.login();
user1.logout();
