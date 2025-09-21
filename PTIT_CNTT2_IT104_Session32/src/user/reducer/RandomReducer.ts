interface RandomState {
  numbers: number[];
}

const initialState: RandomState = {
  numbers: [],
};
const ADD_RANDOM = "ADD_RANDOM";
export const addRandom = () => {
  const randomNum = Math.floor(Math.random() * 100);
  return {
    type: ADD_RANDOM,
    payload: randomNum,
  };
};

export default function randomReducer(
  state = initialState,
  action: any
): RandomState {
  switch (action.type) {
    case ADD_RANDOM:
      return {
        ...state,
        numbers: [...state.numbers, action.payload],
      };
    default:
      return state;
  }
}
