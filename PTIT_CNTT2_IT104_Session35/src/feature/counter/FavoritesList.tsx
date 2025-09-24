import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import { toggleFavorite } from "./favoritesSlice";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

export default function FavoritesList() {
  const users = useSelector((state: RootState) => state.favorites.users);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: 16,
        maxWidth: 300,
      }}
    >
      <h3 style={{ fontWeight: "bold" }}>List Favorites User</h3>
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            padding: "8px 0",
            borderBottom: "1px solid #eee",
          }}
        >
          <div>UserName: {user.name}</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              cursor: "pointer",
            }}
            onClick={() => dispatch(toggleFavorite(user.id))}
          >
            <span>Favorites:</span>
            {user.favorite ? (
              <HeartFilled style={{ color: "red" }} />
            ) : (
              <HeartOutlined style={{ color: "black" }} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
