import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { subjects, programs } from "../data/mockData";
import SubjectCard from "./SubjectCard";
import FilterBar from "./FilterBar";

export default function SubjectList() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [semester, setSemester] = useState("");
  const [units, setUnits] = useState("");
  const [hasPreReq, setHasPreReq] = useState("");
  const [program, setProgram] = useState("");

  const filtered = subjects.filter(s => {
    const matchSearch =
      s.code.toLowerCase().includes(search.toLowerCase()) ||
      s.title.toLowerCase().includes(search.toLowerCase());

    const matchSemester = semester ? s.semester === semester : true;
    const matchUnits = units ? s.units === Number(units) : true;

    const matchPreReq =
      hasPreReq === ""
        ? true
        : hasPreReq === "yes"
        ? s.prerequisites.length > 0
        : s.prerequisites.length === 0;

    const matchProgram = program ? s.program === program : true;

    return matchSearch && matchSemester && matchUnits && matchPreReq && matchProgram;
  });

  return (
    <div className="page-container">
      <div className="section-title">Subject Offerings</div>

      <FilterBar>
        <input
          placeholder="Search subject..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={inputStyle}
        />

        <select value={semester} onChange={e => setSemester(e.target.value)} style={inputStyle}>
          <option value="">All Semester/Term</option>
          <option value="Semester">Semester</option>
          <option value="Term">Term</option>
          <option value="Both">Both</option>
        </select>

        <select value={units} onChange={e => setUnits(e.target.value)} style={inputStyle}>
          <option value="">All Units</option>
          <option value="3">3 Units</option>
          <option value="4">4 Units</option>
        </select>

        <select value={hasPreReq} onChange={e => setHasPreReq(e.target.value)} style={inputStyle}>
          <option value="">Pre-requisites</option>
          <option value="yes">With Pre-requisites</option>
          <option value="no">Without Pre-requisites</option>
        </select>

        <select value={program} onChange={e => setProgram(e.target.value)} style={inputStyle}>
          <option value="">All Programs</option>
          {programs.map(p => (
            <option key={p.code} value={p.code}>
              {p.code.toUpperCase()}
            </option>
          ))}
        </select>
      </FilterBar>

      <div>
        {filtered.map(subject => (
          <SubjectCard
            key={subject.code}
            subject={subject}
            onClick={() => navigate(`/subjects/${subject.code}`)}
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
  minWidth: "180px"
};