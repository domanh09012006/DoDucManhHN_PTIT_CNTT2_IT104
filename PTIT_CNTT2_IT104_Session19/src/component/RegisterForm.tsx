import React, { useState, ChangeEvent, FormEvent } from "react";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setName(value);
    if (!value.trim()) {
      setNameError("Trường này là bắt buộc");
    } else {
      setNameError("");
    }
  }
  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setEmail(value);
    if (!value.trim()) {
      setEmailError("email chua dien");
    } else if (!value.endsWith("@gmail.com")) {
      setEmailError("Email không hợp lệ ");
    } else {
      setEmailError("");
    }
  }
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!nameError && !emailError && name && email) {
      alert("THAANH CONG");
    }
  }
  const isFormValid = name && email && !nameError && !emailError;
  return (
    <form onSubmit={handleSubmit}>
      <h2>Đăng ký thông tin</h2>

      <label>
        Họ tên
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Nhập họ tên..."
        />
      </label>
      {nameError && <p style={{ color: "red" }}>{nameError}</p>}
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="example@gmail.com"
        />
      </label>
      {emailError && <p style={{ color: "red" }}>{emailError}</p>}
      <button type="submit" disabled={!isFormValid}>
        Gửi
      </button>
    </form>
  );
}
export default RegisterForm;
