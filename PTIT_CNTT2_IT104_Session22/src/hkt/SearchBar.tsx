interface Props {
  onAdd: () => void;
  onSearch: (q: string) => void;
  onFilter: (genre: string) => void;
}

function SearchBar({ onAdd, onSearch, onFilter }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex flex-col md:flex-row items-center gap-3">
      <input
        type="text"
        placeholder="🔍 Tìm kiếm theo tên sách hoặc tác giả..."
        className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none"
        onChange={(e) => onSearch(e.target.value)}
      />
      <select
        className="px-3 py-2 rounded-lg border border-gray-300"
        onChange={(e) => onFilter(e.target.value)}
      >
        <option>Tất cả thể loại</option>
        <option>Công nghệ</option>
        <option>Phát triển bản thân</option>
        <option>Tiểu thuyết</option>
        <option>Tâm lý học</option>
      </select>
      <button
        onClick={onAdd}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
      >
        + Thêm sách mới
      </button>
    </div>
  );
}

export default SearchBar;
