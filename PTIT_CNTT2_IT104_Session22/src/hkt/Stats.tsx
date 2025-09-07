import { Book } from "../types/book";

interface Props {
  books: Book[];
}

function Stats({ books }: Props) {
  const total = books.length;
  const available = books.filter((b) => b.status === "available").length;
  const out = books.filter((b) => b.status === "out_of_stock").length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-6 rounded-xl shadow text-center">
        <p className="text-3xl font-bold text-purple-600">{total}</p>
        <p className="text-sm text-indigo-700">Tổng số sách</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow text-center">
        <p className="text-3xl font-bold text-purple-600">{available}</p>
        <p className="text-sm text-indigo-700">Có sẵn</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow text-center">
        <p className="text-3xl font-bold text-purple-600">{out}</p>
        <p className="text-sm text-indigo-700">Hết hàng</p>
      </div>
    </div>
  );
}

export default Stats;
