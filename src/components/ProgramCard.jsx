export default function ProgramCard({ program, onClick }) {
  const statusColors = {
    Active: "#16a34a",
    "Under Review": "#ca8a04",
    "Phased Out": "#dc2626"
  };

  return (
    <div
      onClick={onClick}
      style={{
        background: "#ffffff",
        borderRadius: "20px",
        padding: "25px",
        boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
        cursor: "pointer",
        transition: "all 0.3s ease"
      }}
      onMouseEnter={e => e.currentTarget.style.transform="translateY(-8px)"}
      onMouseLeave={e => e.currentTarget.style.transform="translateY(0)"}
    >
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <h3 style={{margin:0}}>{program.code.toUpperCase()}</h3>
        <span style={{
          background: statusColors[program.status],
          color:"#fff",
          padding:"5px 12px",
          borderRadius:"50px",
          fontSize:"12px"
        }}>
          {program.status}
        </span>
      </div>

      <p style={{margin:"10px 0",fontWeight:600,color:"#334155"}}>
        {program.name}
      </p>

      <div style={{color:"#64748b",fontSize:"14px"}}>
        <div>Type: {program.type}</div>
        <div>Duration: {program.duration}</div>
        <div>Total Units: {program.totalUnits}</div>
      </div>
    </div>
  );
}