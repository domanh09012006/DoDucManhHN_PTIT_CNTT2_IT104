export const REGISTER = "REGISTER";

interface User {
  email: string;
  password: string;
}

interface AuthState {
  registeredUser: User | null;
}

const initialState: AuthState = {
  registeredUser: null,
};

export default function authReducer(state = initialState, action: any): AuthState {
  switch (action.type) {
    case REGISTER:
      return { ...state, registeredUser: action.payload };
    default:
      return state;
  }
}

export const registerUser = (user: User) => ({
  type: REGISTER,
  payload: user,
});
