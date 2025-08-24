import { Component } from "react";

interface State {
  name: string;
  email: string;
  password: string;
  address: string;
  error: string;
}

export default class RegisterForm extends Component<{}, State> {
  state: State = {
    name: "",
    email: "",
    password: "",
    address: "",
    error: "",
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, password, address } = this.state;

    if (!name || !email || !password) {
      this.setState({ error: "Ten, Email va Mat khau khong duoc de trong!" });
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const existedUser = users.find((u: any) => u.email === email);

    if (existedUser) {
      this.setState({ error: "Email da ton tai!" });
      return;
    }

    const newUser = { name, email, password, address };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    this.setState({
      name: "",
      email: "",
      password: "",
      address: "",
      error: "",
    });

    alert("Dang ky tai khoan thanh cong!");
  };

  render() {
    const { name, email, password, address, error } = this.state;

    return (
      <div style={{ padding: 24, border: "1px solid black", width: 350 }}>
        <h2 style={{ textAlign: "center" }}>Dang ky tai khoan</h2>
        <form onSubmit={this.handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Ten sinh vien</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              style={{ padding: 6 }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              style={{ padding: 6 }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Mat khau</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              style={{ padding: 6 }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Dia chi</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={this.handleChange}
              style={{ padding: 6 }}
            />
          </div>
          <button type="submit" style={{ padding: 8, cursor: "pointer" }}>
            Save
          </button>
        </form>
        {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}
      </div>
    );
  }
}
