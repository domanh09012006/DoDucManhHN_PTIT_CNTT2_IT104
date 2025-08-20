import { Carts } from "./Carts"
export const Main = () => {
  const carts: string[] = []
  for (let i = 1; i <= 12; i++) {
    carts.push(`Cart ${i}`)
  }
  return (
    <div
      style={{
        flex: 3,
        background: "#ffebee",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {carts.map((c, idx) => (
        <Carts key={idx} title={c} />
      ))}
    </div>
  )
}
