import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import Dashboard from "./components/Dashboard";
import ProgramList from "./components/ProgramList";
import ProgramDetails from "./components/ProgramDetails";
import SubjectList from "./components/SubjectList";
import SubjectDetails from "./components/SubjectDetails";
import Navbar from "./components/Navbar";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/programs" element={<ProgramList />} />
        <Route path="/programs/:code" element={<ProgramDetails />} />
        <Route path="/subjects" element={<SubjectList />} />
        <Route path="/subjects/:code" element={<SubjectDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}