import React from 'react'
export const UserInfo = () => {
  const user = {
    hoTen: "Nguyen Van A",
    gioiTinh: "Nam",
    ngaySinh: "06/03/2024",
    email: "nva@gmail.com",
    diaChi: "Thanh Xuan, Ha Noi"
  };
  return (
    <>
      <h1>Bai 3</h1>
      <ul>
        <li>Ho va ten: {user.hoTen}</li>
        <li>Gioi tinh: {user.gioiTinh}</li>
        <li>Ngay sinh: {user.ngaySinh}</li>
        <li>Email: {user.email}</li>
        <li>Dia chi: {user.diaChi}</li>
      </ul>
    </>
  )
}
