import { Book } from "../types/book";

interface Props {
  books: Book[];
  onEdit: (book: Book) => void;
  onDelete: (id: number) => void;
}

function BookTable({ books, onEdit, onDelete }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow overflow-hidden">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-purple-600 text-white">
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Tên Sách</th>
            <th className="px-4 py-2 text-left">Tác Giả</th>
            <th className="px-4 py-2 text-left">Thể loại</th>
            <th className="px-4 py-2 text-center">Năm</th>
            <th className="px-4 py-2 text-center">Số lượng</th>
            <th className="px-4 py-2 text-center">Trạng Thái</th>
            <th className="px-4 py-2 text-center">Thao Tác</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <tr key={b.id} className="border-b">
              <td className="px-4 py-2">{b.id}</td>
              <td className="px-4 py-2">{b.title}</td>
              <td className="px-4 py-2">{b.author}</td>
              <td className="px-4 py-2">{b.genre}</td>
              <td className="px-4 py-2 text-center">{b.publishedYear}</td>
              <td className="px-4 py-2 text-center">{b.quantity}</td>
              <td className="px-4 py-2 text-center">
                {b.status === "available" && (
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded-lg text-sm">
                    Có sẵn
                  </span>
                )}
                {b.status === "out_of_stock" && (
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded-lg text-sm">
                    Hết hàng
                  </span>
                )}
                {b.status === "discontinued" && (
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-sm">
                    Ngừng phát hành
                  </span>
                )}
              </td>
              <td className="px-4 py-2 text-center space-x-2">
                <button
                  onClick={() => onEdit(b)}
                  className="px-3 py-1 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600"
                >
                  Sửa
                </button>
                <button
                  onClick={() => onDelete(b.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600"
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookTable;
