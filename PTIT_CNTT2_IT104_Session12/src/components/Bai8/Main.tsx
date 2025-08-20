import Button from "./Button";
interface User {
  id: number;
  name: string;
  email: string;
}
const Main = () => {
  const users: User[] = [
    { id: 1, name: "Nguyễn Văn A", email: "a@gmail.com" },
    { id: 2, name: "Trần Thị B", email: "b@gmail.com" },
    { id: 3, name: "Lê Văn C", email: "c@gmail.com" },
  ];
  return (
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>{user.id}</td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>{user.name}</td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>{user.email}</td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>
            <div style={{ display: "flex", gap: "8px" }}>
              <Button label="Sửa" color="#ddd" />
              <Button label="Xóa" color="red" />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default Main;
