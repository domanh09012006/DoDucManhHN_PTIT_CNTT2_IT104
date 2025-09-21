export interface CounterState {
  value: number;
}
const initialState: CounterState = {
  value: 0,
};
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const counterReducer = (state = initialState, action: any): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
};
