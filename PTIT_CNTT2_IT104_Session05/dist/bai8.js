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
    searchBookByTitle(keyword) {
        console.log(`Ket qua tim kiem cho tu khoa "${keyword}":`);
        let found = false;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].getTitle().toLowerCase().includes(keyword.toLowerCase())) {
                console.log(`ID: ${this.books[i].getId()} - ${this.books[i].getTitle()} - ${this.books[i].getAuthor()}`);
                found = true;
            }
        }
        if (!found) {
            console.log("Khong tim thay sach nao.");
        }
    }
}
let b1 = new Book(1, "Lap trinh JS", "Tac gia A");
let b2 = new Book(2, "Lap trinh TS", "Tac gia B");
let b3 = new Book(3, "Hoc Java", "Tac gia C");
let b4 = new Book(4, "Hoc Python", "Tac gia D");
let b5 = new Book(5, "Hoc C++", "Tac gia E");
let library = new Library();
library.addBook(b1);
library.addBook(b2);
library.addBook(b3);
library.addBook(b4);
library.addBook(b5);
library.viewBooks();
library.searchBookByTitle("Lap");
library.searchBookByTitle("C++");
library.searchBookByTitle("PHP");
