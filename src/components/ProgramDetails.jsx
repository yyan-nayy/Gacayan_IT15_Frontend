import { useParams } from "react-router-dom";
import { programs } from "../data/mockData";

export default function ProgramDetails() {
  const { code } = useParams();
  const program = programs.find(p => p.code === code);

  if (!program) return <div>Program not found</div>;

  return (
    <div className="page-container">
      <div
        style={{
          background: "#ffffff",
          borderRadius: "24px",
          padding: "40px",
          boxShadow: "0 25px 50px rgba(0,0,0,0.08)"
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>
          {program.name}
        </h2>

        <p><strong>Program Code:</strong> {program.code}</p>
        <p><strong>Description:</strong> {program.description}</p>
        <p><strong>Duration:</strong> {program.duration}</p>
        <p><strong>Total Units:</strong> {program.totalUnits}</p>

        <div style={{ marginTop: "30px" }}>
          {Object.entries(program.yearLevels).map(([year, subs]) => (
            <div key={year} style={{ marginBottom: "20px" }}>
              <h3 style={{ color: "#6366f1" }}>{year}</h3>
              <ul>
                {subs.map(s => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}