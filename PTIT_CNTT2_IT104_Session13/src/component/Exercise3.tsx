import React, { Component } from "react";

interface PropsType {
  id: number;
  name: string;
  age: number;
}
interface State {
  user: User[];
}
export default class Exercise3 extends Component<{}, State> {
  constructor(prop: {}) {
    super(prop);
    this.state = {
      user: [
        { id: 1, name: "An", age: 20 },
        { id: 2, name: "An1", age: 20 },
        { id: 3, name: "An2", age: 20 },
      ],
    };
  }
  render() {
    return (
      <>
      <h1>Bai3</h1>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
          <div>
            {this.state.user.map((user) => (
              <tr key={user.id}>
                <td>Id: {user.id}</td>
                <td>Name: {user.name}</td>
                <td>Age: {user.age}</td>
              </tr>
            ))}
          </div>
        </table>
      </>
    );
  }
}
