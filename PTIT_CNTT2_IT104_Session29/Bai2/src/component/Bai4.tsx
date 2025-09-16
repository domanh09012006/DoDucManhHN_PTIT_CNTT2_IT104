import React, { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("http://localhost:3001/students")
      .then(response => {
        console.log("Danh sach sv:", response.data);
      })
  }, []);

  return (
    <div>
      Bai4
    </div>
  );
}

export default App;
