import React, { useReducer } from 'react';

type State = number;
type Action = { type: 'INCREMENT' };
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
};
function Increase() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increase</button>
    </div>
  );
}
export default Increase;
