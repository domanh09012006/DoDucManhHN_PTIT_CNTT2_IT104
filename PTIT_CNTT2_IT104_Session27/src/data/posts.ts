export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "Bắt đầu với React",
    excerpt: "Giới thiệu về React và cách khởi tạo dự án...",
    content: `React là một thư viện JavaScript phổ biến để xây dựng giao diện người dùng.
Với React, bạn có thể tạo các component tái sử dụng, dễ bảo trì và mở rộng.
Bài viết này sẽ giúp bạn khởi đầu với React và hiểu cách hoạt động cơ bản của nó.`,
  },
  {
    id: 2,
    title: "Sử dụng TailwindCSS",
    excerpt: "Tailwind giúp bạn viết CSS nhanh và tiện lợi...",
    content: `TailwindCSS là một framework tiện lợi giúp bạn tạo giao diện nhanh chóng bằng cách sử dụng các class utility.
Nó giúp tăng tốc độ phát triển và giữ cho mã CSS gọn gàng.`,
  },
  {
    id: 3,
    title: "Giới thiệu về React Router",
    excerpt: "Điều hướng trong React với React Router DOM...",
    content: `React Router DOM là thư viện giúp quản lý routing trong ứng dụng React.
Nó cung cấp các thành phần như Route, Link, và Outlet để tạo trải nghiệm SPA hoàn chỉnh.`,
  },
  {
    id: 4,
    title: "Quản lý state với Redux",
    excerpt: "Redux giúp quản lý state tập trung...",
    content: `Redux là thư viện quản lý state toàn cục trong các ứng dụng JavaScript.
Với Redux, bạn có thể dễ dàng kiểm soát và debug luồng dữ liệu.`,
  },
  {
    id: 5,
    title: "Hooks trong React",
    excerpt: "useState, useEffect và các hook phổ biến...",
    content: `React Hooks cho phép bạn sử dụng state và các tính năng khác mà không cần viết class.
useState và useEffect là hai hook phổ biến để quản lý state và vòng đời component.`,
  },
];
