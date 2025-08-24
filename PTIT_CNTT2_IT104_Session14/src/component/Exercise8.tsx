import { Component } from "react";

interface State {
  email: string;
  password: string;
  error: string;
}

export default class Exercise8 extends Component<{}, State> {
  state: State = {
    email: "",
    password: "",
    error: "",
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Email va Mat khau khong duoc de trong!" });
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find(
      (u: any) => u.email === email && u.password === password
    );
    if (foundUser) {
      this.setState({ error: "" });
      alert("Dang nhap thanh cong!");
    } else {
      this.setState({ error: "Dang nhap that bai!" });
    }
  };
  render() {
    const { email, password, error } = this.state;
    return (
      <div style={{ padding: 24, border: "1px solid black", width: 350 }}>
        <h2 style={{ textAlign: "center" }}>Dang nhap tai khoan</h2>
        <form
          onSubmit={this.handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 12 }}
        >
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
          <button
            type="submit"
            style={{
              padding: 10,
              cursor: "pointer",
              background: "blue",
              color: "white",
              fontWeight: "bold",
              border: "none",
              borderRadius: 6,
            }}
          >
            Dang nhap
          </button>
        </form>
        {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}
      </div>
    );
  }
}
