export default function FilterBar({ children }) {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: "20px",
        borderRadius: "20px",
        boxShadow: "0 15px 40px rgba(0,0,0,0.07)",
        marginBottom: "30px",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        alignItems: "center"
      }}
    >
      {children}
    </div>
  );
}