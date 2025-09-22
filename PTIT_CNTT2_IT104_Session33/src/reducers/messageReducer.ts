// src/reducers/messageReducer.ts
type MessageState = string;

const initialState: MessageState = "";

export const setMessage = (message: string) => ({
  type: "SET_MESSAGE" as const,
  payload: message,
});

export const clearMessage = () => ({ type: "CLEAR_MESSAGE" as const });

type Action = ReturnType<typeof setMessage> | ReturnType<typeof clearMessage>;

export default function messageReducer(state = initialState, action: Action): MessageState {
  switch (action.type) {
    case "SET_MESSAGE":
      return action.payload;
    case "CLEAR_MESSAGE":
      return "";
    default:
      return state;
  }
}
