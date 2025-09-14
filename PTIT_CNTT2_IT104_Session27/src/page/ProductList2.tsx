import { useSearchParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductList2() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const [keyword, setKeyword] = useState(searchQuery);
  useEffect(() => {
    setKeyword(searchQuery);
  }, [searchQuery]);

  const handleSearch = () => {
    if (keyword.trim()) {
      setSearchParams({ search: keyword.trim() });
    } else {
      setSearchParams({});
    }
  };
  return (
    <div style={{ padding: "20px" }}>
      <h1>Danh sách sản phẩm</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Nhập từ khóa..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          style={{ padding: "8px", width: "250px", marginRight: "10px" }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "15px",
              width: "220px",
            }}
          >
            <h3>{item.name}</h3>
            <p>Giá: {item.price.toLocaleString()}₫</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
