import React, { useEffect } from "react";
import axios from "axios";

function App() {
  const getStudentById = async (id: number) => {
    try {
      const response = await axios.get(`http://localhost:3001/students/${id}`);

      if (response.data) {
        console.log("SINH VIEN", response.data);
      } else {
        console.log("Ko tim thay sinh vien");
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getStudentById(3)
    getStudentById(100)
  }, []);

  return (
    <div>
      <h3>Bài5</h3>
    </div>
  );
}

export default App;
