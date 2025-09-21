export const CHANGE_COMPANY = "CHANGE_COMPANY";

export const changeCompany = () => ({
  type: CHANGE_COMPANY,
});

interface CompanyState {
  name: string;
}

const initialState: CompanyState = {
  name: "Rikkei Academy",
};

export function changeReducer(
  state = initialState,
  action: any
): CompanyState {
  switch (action.type) {
    case CHANGE_COMPANY:
      return { ...state, name: "RikkeiSoft" };
    default:
      return state;
  }
}
