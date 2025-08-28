import React, { useReducer } from 'react';

interface GenderState {
  gender: string;
}
const genderReducer = (state: GenderState, action: { type: string; payload: string }): GenderState => {
  switch (action.type) {
    case 'SET_GENDER':
      return { ...state, gender: action.payload };
    default:
      return state;
  }
};
const InputRadio = () => {
  const [state, setState] = useReducer(genderReducer, { gender: 'Nam' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ type: 'SET_GENDER', payload: e.target.value });
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="Nam"
            checked={state.gender === 'Nam'}
            onChange={handleChange}
          />
          Nam
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="Nữ"
            checked={state.gender === 'Nữ'}
            onChange={handleChange}
          />
          Nữ
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="Khác"
            checked={state.gender === 'Khác'}
            onChange={handleChange}
          />
          Khác
        </label>
      </div>
      <h2>Selected gender: {state.gender}</h2>
    </div>
  );
};
export default InputRadio;
