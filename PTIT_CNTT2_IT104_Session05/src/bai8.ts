class Book {
    private id: number;
    private title: string;
    private author: string;
    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    public getId(): number {
        return this.id;
    }
    public getTitle(): string {
        return this.title;
    }
    public getAuthor(): string {
        return this.author;
    }
    public setTitle(title: string): void {
        this.title = title;
    }
    public setAuthor(author: string): void {
        this.author = author;
    }
}
class Library {
    private books: Book[] = [];
    public addBook(book: Book): void {
        this.books.push(book);
    }
    public viewBooks(): void {
        console.log("Danh sach sach trong thu vien:");
        for (let i = 0; i < this.books.length; i++) {
            console.log(`${i + 1}. ID: ${this.books[i].getId()} - ${this.books[i].getTitle()} - ${this.books[i].getAuthor()}`);
        }
    }
    public editBookById(id: number, newTitle: string, newAuthor: string): void {
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
    public searchBookByTitle(keyword: string): void {
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
