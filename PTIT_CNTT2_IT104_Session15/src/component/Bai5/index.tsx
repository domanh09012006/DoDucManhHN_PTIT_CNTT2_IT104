import React, { Component } from "react";
import Bar from "./Bar";
import StudentTable from "./StudenTable/StudentTable";

export default class index extends Component {
  render() {
    return (
      <div>
        <h2>Quản lý sinh viên</h2>
        <Bar/>
        <StudentTable />
      </div>
    );
  }
}
