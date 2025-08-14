class Book {
    id: number;
    title: string;
    author: string;
    year: number;
    constructor(id: number, title: string, author: string, year: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
class textBook extends Book {
    grade: number;
    constructor(id: number, title: string, author: string, year: number, grade: number) {
        super(id, title, author, year);
        this.grade = grade;
    }
}
class Comic extends Book {
    studio: string;
    constructor(id: number, title: string, author: string, year: number, studio: string) {
        super(id, title, author, year);
        this.studio = studio;
    }
}
class Library<T extends Book> {
    books: T[] = [];
    addBook(book: T): void {
        this.books.push(book);
    }
    getBookByID(id: number): T | undefined {
        return this.books.find((book) => book.id === id);
    }
    removeBook(id: number): void {
        this.books = this.books.filter((book) => book.id !== id);
    }
    updateBook(id: number, updatedBook: T): void {
        const index = this.books.findIndex((book) => book.id === id);
        if (index !== -1) {
            this.books[index] = updatedBook;
        } else {
            console.log("Không tìm thấy sách");
        }
    }
    listBook(): T[] {
        return this.books;
    }
    findBooksByTitleOrAuthor(searchTerm: string): T[] {
        return this.books.filter(
            (book) =>
                book.title.includes(searchTerm) ||
                book.author.includes(searchTerm)
        );
    }
    getTotalBook(): number {
        return this.books.length;
    }
    findBookByYear(year: number): T[] {
        return this.books.filter((book) => book.year === year);
    }
}
let lib = new Library<textBook | Comic>();
lib.addBook(new textBook(1, "S1", "TG1", 2000, 5));
lib.addBook(new Comic(2, "S2", "TG2", 2001, "Superman"));
console.log(lib.listBook());
