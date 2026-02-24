import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkStyle = (path) => ({
    textDecoration: "none",
    color: location.pathname === path ? "#6366f1" : "#94a3b8",
    fontWeight: 600,
    fontSize: "15px",
    transition: "0.3s"
  });

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 40px",
      background: "#0f172a",
      boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
    }}>
      <h2 style={{color:"#fff"}}>Umbrella Academy</h2>

      <div style={{display:"flex",gap:"30px"}}>
        <Link to="/" style={linkStyle("/")}>Dashboard</Link>
        <Link to="/programs" style={linkStyle("/programs")}>Programs</Link>
        <Link to="/subjects" style={linkStyle("/subjects")}>Subjects</Link>
      </div>
    </div>
  );
}