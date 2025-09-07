import React, { useState, useEffect } from "react";
import Book  from "./hkt/book";
import Header from "./hkt/Header";
import Stats from "./hkt/Stats";
import SearchBar from "./hkt/SearchBar";
import BookTable from "./hkt/BookTable";
import BookForm from "./hkt/BookForm";
import ConfirmDialog from "./hkt/ConfirmDialog";

function App() {
  const [books, setBooks] = useState<Book[]>(() => {
    const stored = localStorage.getItem("books");
    return stored ? JSON.parse(stored) : [];
  });

  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [filterGenre, setFilterGenre] = useState("Tất cả thể loại");

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const handleSave = (book: Book) => {
    if (editingBook) {
      setBooks(books.map((b) => (b.id === book.id ? book : b)));
    } else {
      setBooks([...books, { ...book, id: Date.now() }]);
    }
    setShowForm(false);
    setEditingBook(null);
  };

  const handleDelete = (id: number) => {
    setBooks(books.filter((b) => b.id !== id));
    setDeleteId(null);
  };

  const filteredBooks = books.filter((b) => {
    const matchSearch =
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase());
    const matchGenre =
      filterGenre === "Tất cả thể loại" || b.genre === filterGenre;
    return matchSearch && matchGenre;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-purple-500 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <Header />
        <Stats books={books} />
        <SearchBar
          onAdd={() => setShowForm(true)}
          onSearch={setSearch}
          onFilter={setFilterGenre}
        />
        <BookTable
          books={filteredBooks}
          onEdit={(book) => {
            setEditingBook(book);
            setShowForm(true);
          }}
          onDelete={(id) => setDeleteId(id)}
        />
      </div>

      {showForm && (
        <BookForm
          book={editingBook}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false);
            setEditingBook(null);
          }}
        />
      )}

      {deleteId !== null && (
        <ConfirmDialog
          message="Bạn có chắc chắn muốn xóa sách này?"
          onConfirm={() => handleDelete(deleteId)}
          onCancel={() => setDeleteId(null)}
        />
      )}
    </div>
  );
}

export default App;
