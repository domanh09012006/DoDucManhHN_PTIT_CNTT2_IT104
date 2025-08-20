import { Header } from "./Header";
import { Menu } from "./Menu";
import { Main } from "./Main";
import { Footer } from "./Footer";
function AdminIndex() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <h1>Bai6</h1>
      <Header />
      <div style={{ display: "flex", flex: 1 }}>
        <Menu />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            gap: "10px",
          }}
        >
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default AdminIndex;
