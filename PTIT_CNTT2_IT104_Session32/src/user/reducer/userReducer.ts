export interface User {
  id: number;
  userName: string;
  gender: string;
  dateBirth: string;
  address: string;
}

const initialState: User = {
  id: 1,
  userName: "Nguyễn Văn Nam",
  gender: "Nam",
  dateBirth: "20/03/2023",
  address: "Thanh Xuân, Hà Nội"
};
const userReducer = (state: User = initialState, action: any): User => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
