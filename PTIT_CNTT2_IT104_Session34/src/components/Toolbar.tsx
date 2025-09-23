import { Button } from "@mui/material";
import React from "react";

const Toolbar: React.FC = () => {
  return (
    <div className="flex justify-between mb-4">
      <Button variant="contained" color="primary">Thêm mới sinh viên</Button>
      <div className="flex gap-2">{/* Search & sort bỏ */}</div>
    </div>
  );
};

export default Toolbar;
