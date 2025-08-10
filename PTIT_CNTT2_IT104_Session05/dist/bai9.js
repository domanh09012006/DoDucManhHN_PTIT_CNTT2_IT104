"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    id;
    title;
    author;
    year;
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
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
    getYear() {
        return this.year;
    }
    setTitle(newTitle) {
        this.title = newTitle;
    }
    setAuthor(newAuthor) {
        this.author = newAuthor;
    }
    setYear(newYear) {
        this.year = newYear;
    }
    printInfo() {
        console.log(`ID: ${this.id}, Ten sach: ${this.title}, Tac gia: ${this.author}, Nam xuat ban: ${this.year}`);
    }
}
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    viewBooks() {
        if (this.books.length === 0) {
            console.log("Thu vien khong co sach nao");
            return;
        }
        console.log("Danh sach sach trong thu vien:");
        for (let b of this.books) {
            b.printInfo();
        }
    }
    searchByTitle(title) {
        let found = this.books.filter(b => b.getTitle().toLowerCase().includes(title.toLowerCase()));
        if (found.length === 0) {
            console.log("Khong tim thay sach nao");
            return;
        }
        console.log("Cac sach tim thay:");
        for (let b of found) {
            b.printInfo();
        }
    }
    updateBookById(id, newTitle, newAuthor, newYear) {
        let book = this.books.find(b => b.getId() === id);
        if (!book) {
            console.log("Khong tim thay sach de cap nhat");
            return;
        }
        book.setTitle(newTitle);
        book.setAuthor(newAuthor);
        book.setYear(newYear);
        console.log("Da cap nhat thong tin sach thanh cong");
    }
    deleteBookById(id) {
        let index = this.books.findIndex(b => b.getId() === id);
        if (index === -1) {
            console.log("Khong tim thay sach de xoa");
            return;
        }
        this.books.splice(index, 1);
        console.log("Da xoa sach thanh cong");
    }
}
let s1 = new Book(1, "Sach A", "Tac gia A", 2020);
let s2 = new Book(2, "Sach B", "Tac gia B", 2021);
let thuVien = new Library();
thuVien.addBook(s1);
thuVien.addBook(s2);
thuVien.viewBooks();
thuVien.searchByTitle("Sach C");
thuVien.updateBookById(3, "Sach Cap Nhat", "Tac gia Moi", 2025);
thuVien.viewBooks();
thuVien.deleteBookById(2);
thuVien.viewBooks();
