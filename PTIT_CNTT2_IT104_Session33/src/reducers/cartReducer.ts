export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const initialState: CartItem[] = [];

export const addToCart = (product: { id: number; name: string; price: number }) => ({
  type: "ADD_TO_CART" as const,
  payload: product,
});

export const removeFromCart = (id: number) => ({
  type: "REMOVE_FROM_CART" as const,
  payload: id,
});

export const updateQuantity = (payload: { id: number; quantity: number }) => ({
  type: "UPDATE_QUANTITY" as const,
  payload,
});

type Action =
  | ReturnType<typeof addToCart>
  | ReturnType<typeof removeFromCart>
  | ReturnType<typeof updateQuantity>;

export default function cartReducer(state = initialState, action: Action): CartItem[] {
  switch (action.type) {
    case "ADD_TO_CART": {
      const exist = state.find((it) => it.id === action.payload.id);
      if (exist) {
        return state.map((it) =>
          it.id === action.payload.id ? { ...it, quantity: it.quantity + 1 } : it
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }

    case "REMOVE_FROM_CART":
      return state.filter((it) => it.id !== action.payload);

    case "UPDATE_QUANTITY":
      return state.map((it) =>
        it.id === action.payload.id ? { ...it, quantity: action.payload.quantity } : it
      );

    default:
      return state;
  }
}
