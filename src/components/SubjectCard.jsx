export default function SubjectCard({ subject, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background:"#fff",
        borderRadius:"16px",
        padding:"20px",
        marginBottom:"15px",
        boxShadow:"0 10px 25px rgba(0,0,0,0.06)",
        cursor:"pointer",
        transition:"0.3s"
      }}
      onMouseEnter={e=>e.currentTarget.style.transform="scale(1.02)"}
      onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}
    >
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <strong>{subject.code}</strong>
        <span style={{
          background:"#e0e7ff",
          color:"#3730a3",
          padding:"4px 10px",
          borderRadius:"20px",
          fontSize:"12px"
        }}>
          {subject.semester}
        </span>
      </div>

      <p style={{margin:"8px 0",fontWeight:600}}>
        {subject.title}
      </p>

      <span style={{color:"#64748b"}}>
        {subject.units} Units
      </span>
    </div>
  );
}