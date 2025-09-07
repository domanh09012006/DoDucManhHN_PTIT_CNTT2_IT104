import { useState } from "react";
import { Book } from "../types/book";

interface Props {
  book: Book | null;
  onSave: (book: Book) => void;
  onCancel: () => void;
}

function BookForm({ book, onSave, onCancel }: Props) {
  const [form, setForm] = useState<Book>(
    book || {
      id: 0,
      title: "",
      author: "",
      genre: "Công nghệ",
      publishedYear: new Date().getFullYear(),
      quantity: 1,
      available: 1,
      isbn: "",
      status: "available",
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === "quantity" || name === "available" || name === "publishedYear" ? Number(value) : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.author || !form.isbn) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    onSave(form);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-xl w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">
          {book ? "✏️ Chỉnh sửa sách" : "➕ Thêm sách mới"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Tên sách"
            className="w-full px-3 py-2 border rounded"
          />
          <input
            name="author"
            value={form.author}
            onChange={handleChange}
            placeholder="Tác giả"
            className="w-full px-3 py-2 border rounded"
          />
          <input
            name="genre"
            value={form.genre}
            onChange={handleChange}
            placeholder="Thể loại"
            className="w-full px-3 py-2 border rounded"
          />
          <input
            type="number"
            name="publishedYear"
            value={form.publishedYear}
            onChange={handleChange}
            placeholder="Năm xuất bản"
            className="w-full px-3 py-2 border rounded"
          />
          <input
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            placeholder="Số lượng"
            className="w-full px-3 py-2 border rounded"
          />
          <input
            type="number"
            name="available"
            value={form.available}
            onChange={handleChange}
            placeholder="Có sẵn"
            className="w-full px-3 py-2 border rounded"
          />
          <input
            name="isbn"
            value={form.isbn}
            onChange={handleChange}
            placeholder="ISBN"
            className="w-full px-3 py-2 border rounded"
          />
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="available">Có sẵn</option>
            <option value="out_of_stock">Hết hàng</option>
            <option value="discontinued">Ngừng phát hành</option>
          </select>
          <div className="flex justify-end gap-3">
            <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded">
              Hủy
            </button>
            <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded">
              Lưu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookForm;
