import { useEffect } from "react";

const getAllProduct = () => {
  fetch("http://localhost:3001/products")
    .then((res) => res.json())
    .then((data) => {
      console.log("danh sách sản phẩm", data);
    })
}
export default function GetAllProduct() {
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <div>
      Bai2
    </div>
  );
}
