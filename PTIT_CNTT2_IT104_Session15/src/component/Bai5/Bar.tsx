import React, { Component } from "react";

export default class Bar extends Component {
  render() {
    return (
      <div style={{ margin: "10px 0" }}>
        <button>Thêm mới sinh viên</button>
        <select>
          <option>Sắp xếp theo tuổi</option>
        </select>
        <input type="text" placeholder="Tìm kiếm theo tên hoặc email" />
      </div>
    );
  }
}
