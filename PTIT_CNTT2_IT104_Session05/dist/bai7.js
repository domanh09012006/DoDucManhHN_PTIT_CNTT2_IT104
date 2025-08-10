"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    id;
    title;
    author;
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    setTitle(title) {
        this.title = title;
    }
    setAuthor(author) {
        this.author = author;
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
            console.log(`${i + 1}. ID: ${this.books[i].getId()} - ${this.books[i].getTitle()} - ${this.books[i].getAuthor()}`);
        }
    }
    editBookById(id, newTitle, newAuthor) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].getId() === id) {
                this.books[i].setTitle(newTitle);
                this.books[i].setAuthor(newAuthor);
                console.log(`Sach co ID ${id} da duoc cap nhat.`);
                return;
            }
        }
        console.log(`Khong tim thay sach co ID ${id}.`);
    }
}
let b1 = new Book(1, "Sach 1", "Tac gia A");
let b2 = new Book(2, "Sach 2", "Tac gia B");
let b3 = new Book(3, "Sach 3", "Tac gia C");
let b4 = new Book(4, "Sach 4", "Tac gia D");
let b5 = new Book(5, "Sach 5", "Tac gia E");
let library = new Library();
library.addBook(b1);
library.addBook(b2);
library.addBook(b3);
library.addBook(b4);
library.addBook(b5);
console.log("\n");
library.viewBooks();
library.editBookById(3, "Sach 3 moi", "Tac gia C moi");
library.viewBooks();
