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
class adminAcc extends Account {
    constructor(id, userName, password, isLogin, role) {
        super(id, userName, password, isLogin, role);
    }
    banUser(user) {
        user.status = "banned";
        console.log(`Nguoi dung ${user.userName} da bi khoa`);
    }
}
let user1 = new userAcc(1, "nguyenvana", "123456", false, "user", "active");
let admin1 = new adminAcc(99, "admin", "adminpass", false, "admin");
user1.login();
admin1.banUser(user1);
user1.login();
