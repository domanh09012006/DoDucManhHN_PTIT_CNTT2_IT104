import axiosClient from "./api";

export interface Category {
  id: string;
  name: string;
}

const categoryApi = {
  getAll: () => axiosClient.get<Category[]>("/categories"),
  add: (data: Omit<Category, "id">) => axiosClient.post<Category>("/categories", data),
  delete: (id: string) => axiosClient.delete(`/categories/${id}`),
};

export default categoryApi;
