"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    id;
    title;
    author;
    stock;
    status;
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member {
    id;
    name;
    contact;
    lendedBooks = [];
    status;
    constructor(id, name, contact, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
    }
}
class LendedBook {
    memberId;
    bookId;
    dueDate;
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    books = [];
    members = [];
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        if (this.books.length === 0) {
            console.log("Khong co sach nao");
            return;
        }
        console.log("Tat ca sach trongt hu vien:");
        this.books.forEach(b => {
            console.log(`ID: ${b.id}, tieu de: ${b.title}, tacgia: ${b.author}, so sach: ${b.stock}, trang thai: ${b.status}`);
        });
    }
}
let myLibrary = new Library();
let book1 = new Book(1, "Hoc typescript", "Binh", 5, "offline");
myLibrary.addBook(book1);
myLibrary.showBooks();
