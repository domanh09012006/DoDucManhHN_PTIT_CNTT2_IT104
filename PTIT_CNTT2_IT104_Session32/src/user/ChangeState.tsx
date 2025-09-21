import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { changeCompany } from "./reducer/CompanyReducer";

const ChangeState: React.FC = () => {
  const company = useSelector((state: RootState) => state.company.name);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>{company}</h2>
      <button onClick={() => dispatch(changeCompany())}>Change state</button>
    </div>
  );
};

export default ChangeState;
