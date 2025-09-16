import React, { useEffect } from "react";
import axios from "axios";

function App() {
  const createStudent = async () => {
    const student = {
      id: 101,
      name: "Nguyen Van A",
      age: 20,
      email: "vana@example.com",
      address: "Hà Nội"
    };

    try {
      const response = await axios.post("http://localhost:3001/students", student);
      console.log("Them thnah cong", response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    createStudent();
  }, []);

  return (
    <div>
      Bai6
    </div>
  );
}

export default App;
