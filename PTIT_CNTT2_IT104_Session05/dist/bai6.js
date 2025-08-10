"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    title;
    author;
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
}
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    viewBooks() {
        console.log("Danh sach sach trong thu vien:");
        for (let i = 0; i < this.books.length; i++) {
            console.log(`${i + 1}. ${this.books[i].getTitle()} - ${this.books[i].getAuthor()}`);
        }
    }
}
let b1 = new Book("Sach 1", "Tac gia A");
let b2 = new Book("Sach 2", "Tac gia B");
let b3 = new Book("Sach 3", "Tac gia C");
let b4 = new Book("Sach 4", "Tac gia D");
let b5 = new Book("Sach 5", "Tac gia E");
let library = new Library();
library.addBook(b1);
library.addBook(b2);
library.addBook(b3);
library.addBook(b4);
library.addBook(b5);
library.viewBooks();
