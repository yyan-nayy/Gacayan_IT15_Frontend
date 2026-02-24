import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { programs } from "../data/mockData";
import ProgramCard from "./ProgramCard";
import FilterBar from "./FilterBar";

export default function ProgramList() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");

  const filtered = programs.filter(p => {
    const matchSearch =
      p.code.toLowerCase().includes(search.toLowerCase()) ||
      p.name.toLowerCase().includes(search.toLowerCase());

    const matchStatus = status ? p.status === status : true;
    const matchType = type ? p.type === type : true;

    return matchSearch && matchStatus && matchType;
  });

  return (
    <div className="page-container">
      <div className="section-title">Program Offerings</div>

      <FilterBar>
        <input
          placeholder="Search program..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={inputStyle}
        />

        <select value={status} onChange={e => setStatus(e.target.value)} style={inputStyle}>
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Under Review">Under Review</option>
          <option value="Phased Out">Phased Out</option>
        </select>

        <select value={type} onChange={e => setType(e.target.value)} style={inputStyle}>
          <option value="">All Types</option>
          <option value="Bachelor">Bachelor</option>
          <option value="Diploma">Diploma</option>
        </select>
      </FilterBar>

      <div className="grid-layout">
        {filtered.map(program => (
          <ProgramCard
            key={program.code}
            program={program}
            onClick={() => navigate(`/programs/${program.code}`)}
          />
        ))}
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "10px 14px",
  borderRadius: "12px",
  border: "1px solid #e2e8f0",
  fontSize: "14px",
  minWidth: "200px"
};