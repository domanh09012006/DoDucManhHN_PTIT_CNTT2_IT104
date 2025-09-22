interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const initialState: CartItem[] = [];

type Action =
  | { type: "ADD_TO_CART"; payload: { id: number; name: string; price: number } }
  | { type: "REMOVE_FROM_CART"; payload: number };

const cartReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const exist = state.find((item) => item.id === action.payload.id);
      if (exist) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

export default cartReducer;
