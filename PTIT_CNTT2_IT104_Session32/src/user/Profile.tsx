import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";

export default function Profile() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div>
      <h3>Thông tin cá nhân</h3>
      <p>
        <b>Id:</b> {user.id}
      </p>
      <p>
        <b>Họ và tên:</b> {user.userName}
      </p>
      <p>
        <b>Giới tính:</b> {user.gender}
      </p>
      <p>
        <b>Ngày sinh:</b> {user.dateBirth}
      </p>
      <p>
        <b>Địa chỉ:</b> {user.address}
      </p>
    </div>
  );
}
