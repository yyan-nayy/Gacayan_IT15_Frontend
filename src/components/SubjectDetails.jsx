import { useParams } from "react-router-dom";
import { subjects } from "../data/mockData";

export default function SubjectDetails() {
  const { code } = useParams();
  const subject = subjects.find(s => s.code === code);

  if (!subject) return <div>Subject not found</div>;

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
        <h2>
          {subject.code} - {subject.title}
        </h2>

        <p><strong>Units:</strong> {subject.units}</p>
        <p><strong>Semester/Term:</strong> {subject.semester}</p>
        <p><strong>Program:</strong> {subject.program}</p>
        <p><strong>Description:</strong> {subject.description}</p>

        <p>
          <strong>Pre-requisites:</strong>{" "}
          {subject.prerequisites.length
            ? subject.prerequisites.join(", ")
            : "none"}
        </p>

        <p>
          <strong>Co-requisites:</strong>{" "}
          {subject.corequisites.length
            ? subject.corequisites.join(", ")
            : "none"}
        </p>
      </div>
    </div>
  );
}