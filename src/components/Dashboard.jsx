import { programs, subjects } from "../data/mockData";

export default function Dashboard() {
  const active = programs.filter(p => p.status==="Active").length;

  const statCard = (title,value,color) => (
    <div style={{
      background:"#fff",
      borderRadius:"20px",
      padding:"30px",
      boxShadow:"0 20px 40px rgba(0,0,0,0.08)"
    }}>
      <h4 style={{color:"#64748b"}}>{title}</h4>
      <h2 style={{color,marginTop:"10px"}}>{value}</h2>
    </div>
  );

  return (
    <div className="page-container">
      <div className="section-title">Dashboard Overview</div>

      <div className="grid-layout">
        {statCard("Total Programs", programs.length, "#6366f1")}
        {statCard("Total Subjects", subjects.length, "#0ea5e9")}
        {statCard("Active Programs", active, "#16a34a")}
        {statCard("Subjects with Pre-req",
          subjects.filter(s=>s.prerequisites.length>0).length,
          "#f59e0b")}
      </div>
    </div>
  );
}