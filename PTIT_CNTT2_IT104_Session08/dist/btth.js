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
}
class textBook extends Book {
    grade;
    constructor(id, title, author, year, grade) {
        super(id, title, author, year);
        this.grade = grade;
    }
}
class Comic extends Book {
    studio;
    constructor(id, title, author, year, studio) {
        super(id, title, author, year);
        this.studio = studio;
    }
}
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    getBookByID(id) {
        return this.books.find((book) => book.id === id);
    }
    removeBook(id) {
        this.books = this.books.filter((book) => book.id !== id);
    }
    updateBook(id, updatedBook) {
        const index = this.books.findIndex((book) => book.id === id);
        if (index !== -1) {
            this.books[index] = updatedBook;
        }
        else {
            console.log("Không tìm thấy sách");
        }
    }
    listBook() {
        return this.books;
    }
    findBooksByTitleOrAuthor(searchTerm) {
        return this.books.filter((book) => book.title.includes(searchTerm) ||
            book.author.includes(searchTerm));
    }
    getTotalBook() {
        return this.books.length;
    }
    findBookByYear(year) {
        return this.books.filter((book) => book.year === year);
    }
}
let lib = new Library();
lib.addBook(new textBook(1, "S1", "TG1", 2000, 5));
lib.addBook(new Comic(2, "S2", "TG2", 2001, "Superman"));
console.log(lib.listBook());
