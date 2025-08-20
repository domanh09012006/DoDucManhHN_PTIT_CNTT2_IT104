import Title from "./Title";
import Main from "./Main";
const UserList = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "16px" }}>
        Danh sách người dùng
      </h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <Title />
        <Main />
      </table>
    </div>
  );
};
export default UserList;
