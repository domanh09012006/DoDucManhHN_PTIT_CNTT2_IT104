interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string;
}

const initialState: Product[] = [
  { id: 1, name: "Pizza", price: 12, stock: 10, image: "https://tse3.mm.bing.net/th/id/OIP.8UeIFPMYwIErE1ShRYB9QAHaEo?pid=Api&P=0&h=220" },
  { id: 2, name: "Hamburger", price: 8, stock: 15, image: "https://tse4.mm.bing.net/th/id/OIP.KomAB7rg-OCyK3QEDO81fwHaEn?pid=Api&P=0&h=220" },
  { id: 3, name: "Fried Chicken", price: 10, stock: 12, image: "https://tse1.mm.bing.net/th/id/OIP.qaOJCXub2RFXZ4wTgW6whAHaE8?pid=Api&P=0&h=220" },
  { id: 4, name: "French Fries", price: 5, stock: 20, image: "https://tse2.mm.bing.net/th/id/OIP.GqUvr8wmgKYa7LL8YpnGMAHaE7?pid=Api&P=0&h=220" },
  { id: 5, name: "Hot Dog", price: 7, stock: 8, image: "https://tse2.mm.bing.net/th/id/OIP.CvF3qv47awN6G7iKVKjnSAHaFS?pid=Api&P=0&h=220" },
];

type Action =
  | { type: "DECREASE_STOCK"; payload: number }
  | { type: "INCREASE_STOCK"; payload: number };

const productReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "DECREASE_STOCK":
      return state.map((p) =>
        p.id === action.payload ? { ...p, stock: p.stock - 1 } : p
      );
    case "INCREASE_STOCK":
      return state.map((p) =>
        p.id === action.payload ? { ...p, stock: p.stock + 1 } : p
      );
    default:
      return state;
  }
};

export default productReducer;
