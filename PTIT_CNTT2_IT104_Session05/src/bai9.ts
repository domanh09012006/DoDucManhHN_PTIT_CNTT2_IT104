class Book {
    private id: number
    private title: string
    private author: string
    private year: number
    constructor(id: number, title: string, author: string, year: number) {
        this.id = id
        this.title = title
        this.author = author
        this.year = year
    }
    public getId(): number {
        return this.id
    }
    public getTitle(): string {
        return this.title
    }
    public getAuthor(): string {
        return this.author
    }
    public getYear(): number {
        return this.year
    }
    public setTitle(newTitle: string): void {
        this.title = newTitle
    }
    public setAuthor(newAuthor: string): void {
        this.author = newAuthor
    }
    public setYear(newYear: number): void {
        this.year = newYear
    }
    public printInfo(): void {
        console.log(`ID: ${this.id}, Ten sach: ${this.title}, Tac gia: ${this.author}, Nam xuat ban: ${this.year}`)
    }
}
class Library {
    private books: Book[] = []
    public addBook(book: Book): void {
        this.books.push(book)
    }
    public viewBooks(): void {
        if (this.books.length === 0) {
            console.log("Thu vien khong co sach nao")
            return
        }
        console.log("Danh sach sach trong thu vien:")
        for (let b of this.books) {
            b.printInfo()
        }
    }
    public searchByTitle(title: string): void {
        let found = this.books.filter(b => b.getTitle().toLowerCase().includes(title.toLowerCase()))
        if (found.length === 0) {
            console.log("Khong tim thay sach nao")
            return
        }
        console.log("Cac sach tim thay:")
        for (let b of found) {
            b.printInfo()
        }
    }
    public updateBookById(id: number, newTitle: string, newAuthor: string, newYear: number): void {
        let book = this.books.find(b => b.getId() === id)
        if (!book) {
            console.log("Khong tim thay sach de cap nhat")
            return
        }
        book.setTitle(newTitle)
        book.setAuthor(newAuthor)
        book.setYear(newYear)
        console.log("Da cap nhat thong tin sach thanh cong")
    }
    public deleteBookById(id: number): void {
        let index = this.books.findIndex(b => b.getId() === id)
        if (index === -1) {
            console.log("Khong tim thay sach de xoa")
            return
        }
        this.books.splice(index, 1)
        console.log("Da xoa sach thanh cong")
    }
}
let s1 = new Book(1, "Sach A", "Tac gia A", 2020)
let s2 = new Book(2, "Sach B", "Tac gia B", 2021)

let thuVien = new Library()
thuVien.addBook(s1)
thuVien.addBook(s2)
thuVien.viewBooks()
thuVien.searchByTitle("Sach C")
thuVien.updateBookById(3, "Sach Cap Nhat", "Tac gia Moi", 2025)
thuVien.viewBooks()
thuVien.deleteBookById(2)
thuVien.viewBooks()
