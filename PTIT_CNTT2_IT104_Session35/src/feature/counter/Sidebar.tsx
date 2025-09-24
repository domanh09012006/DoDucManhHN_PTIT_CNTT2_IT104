// src/features/menu/Sidebar.tsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import { toggleMenu } from "./menuSlice";
import {
  DashboardOutlined,
  UserOutlined,
  DollarOutlined,
  BarChartOutlined,
  FileTextOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

export default function Sidebar() {
  const dispatch = useDispatch();
  const collapsed = useSelector((state: RootState) => state.menu.collapsed);
  const [hoverKey, setHoverKey] = useState<string | null>(null);

  const menuItems = [
    { key: "dashboard", label: "Bảng điều khiển", icon: <DashboardOutlined /> },
    { key: "account", label: "Tài khoản", icon: <UserOutlined /> },
    { key: "asset", label: "Tài sản", icon: <DollarOutlined /> },
    { key: "statistic", label: "Thống kê", icon: <BarChartOutlined /> },
    { key: "document", label: "Tài liệu", icon: <FileTextOutlined /> },
  ];

  return (
    <div
      style={{
        width: collapsed ? 60 : 200,
        backgroundColor: "#001f3f",
        color: "white",
        minHeight: "100vh",
        transition: "width 0.25s ease",
        paddingTop: 10,
        paddingBottom: 10,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      {menuItems.map((item) => (
        <div
          key={item.key}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "12px 14px",
            cursor: "pointer",
            transition: "background 0.15s ease",
            userSelect: "none",
            gap: 10,
            background:
              hoverKey === item.key ? "rgba(255,255,255,0.06)" : "transparent",
          }}
          onMouseEnter={() => setHoverKey(item.key)}
          onMouseLeave={() => setHoverKey(null)}
        >
          <span
            style={{
              fontSize: 18,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {item.icon}
          </span>
          {!collapsed && (
            <span
              style={{
                marginLeft: 4,
                fontSize: 14,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {item.label}
            </span>
          )}
        </div>
      ))}

      <div
        style={{
          marginTop: "auto",
          padding: "12px 14px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          cursor: "pointer",
          background:
            hoverKey === "toggle" ? "rgba(255,255,255,0.06)" : "transparent",
        }}
        onMouseEnter={() => setHoverKey("toggle")}
        onMouseLeave={() => setHoverKey(null)}
        onClick={() => dispatch(toggleMenu())}
      >
        <span
          style={{
            fontSize: 18,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {collapsed ? <RightOutlined /> : <LeftOutlined />}
        </span>
        {!collapsed && (
          <span
            style={{
              marginLeft: 4,
              fontSize: 14,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Thu gọn
          </span>
        )}
      </div>
    </div>
  );
}
