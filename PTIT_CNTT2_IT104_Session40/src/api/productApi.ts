import axiosClient from "./api";
import { v4 as uuidv4 } from "uuid";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

const productApi = {
  getAll: () => axiosClient.get<Product[]>("/products"),
  getById: (id: string) => axiosClient.get<Product>(`/products/${id}`),
  add: (data: Omit<Product, "id">) =>
    axiosClient.post<Product>("/products", { ...data, id: uuidv4() }),
  update: (id: string, data: Partial<Product>) =>
    axiosClient.put<Product>(`/products/${id}`, data),
  delete: (id: string) => axiosClient.delete(`/products/${id}`),
};

export default productApi;
