class Book {
    id: number;
    title: string;
    author: string;
    stock: number;
    status: string;
    constructor(id: number, title: string, author: string, stock: number, status: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member {
    id: number;
    name: string;
    contact: string;
    lendedBooks: LendedBook[] = [];
    status: string;
    constructor(id: number, name: string, contact: string, status: string) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
    }
}
class LendedBook {
    memberId: number;
    bookId: number;
    dueDate: string;
    constructor(memberId: number, bookId: number, dueDate: string) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    books: Book[] = [];
    members: Member[] = [];
    addBook(book: Book) {
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
