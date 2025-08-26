import React, { Component, ChangeEvent, FormEvent } from "react";

interface UserFormState {
  name: string;
  email: string;
  age: string;
  error: string;
  submitted: boolean;
}
export default class Bai5 extends Component<{}, UserFormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "",
      email: "",
      age: "",
      error: "",
      submitted: false,
    };
  }
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, age } = this.state;
    if (!email.includes("@")) {
      this.setState({ error: "Email không hợp lệ", submitted: false });
      return;
    }
    if (parseInt(age) < 0) {
      this.setState({ error: "Tuổi không được âm", submitted: false });
      return;
    }
    this.setState({ error: "", submitted: true });
  };
  handleReset = () => {
    this.setState({
      name: "",
      email: "",
      age: "",
      error: "",
      submitted: false,
    });
  };
  render() {
    const { name, email, age, error, submitted } = this.state;
    let errorMessage = null;
    if (error) {
      errorMessage = <p style={{ color: "red", marginTop: "10px" }}>{error}</p>;
    }
    let resultBox = null;
    if (submitted) {
      resultBox = (
        <div
          style={{
            marginTop: "20px",
            backgroundColor: "#e6ffe6",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <h4>✅ Thông tin đã nhập:</h4>
          <p>
            <strong>Họ tên:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Tuổi:</strong> {age}
          </p>
        </div>
      );
    }
    return (
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h3>📋 Nhập thông tin người dùng</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Họ tên"
            value={name}
            onChange={this.handleChange}
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              marginBottom: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              marginBottom: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <input
            type="number"
            name="age"
            placeholder="Tuổi"
            value={age}
            onChange={this.handleChange}
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              marginBottom: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <div style={{ marginTop: "10px" }}>
            <button
              type="submit"
              style={{
                padding: "8px 12px",
                marginRight: "8px",
                border: "none",
                backgroundColor: "#007bff",
                color: "white",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Gửi
            </button>
            <button
              type="button"
              onClick={this.handleReset}
              style={{
                padding: "8px 12px",
                border: "none",
                backgroundColor: "#6c757d",
                color: "white",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Xóa tất cả
            </button>
          </div>
        </form>
        {errorMessage}
        {resultBox}
      </div>
    );
  }
}
